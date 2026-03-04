#!/bin/bash

OUTPUT_DIR="/var/www/dashboard/html/web/data/"
OUTPUT="$OUTPUT_DIR/services_status.json"

mkdir -p "$OUTPUT_DIR"

service_exists() {
    systemctl list-unit-files 2>/dev/null | grep -q "^$1.service"
}

get_status() {
    if service_exists "$1"; then
        STATUS=$(systemctl is-active "$1" 2>/dev/null)
        case "$STATUS" in
            active) echo "active" ;;
            inactive) echo "inactive" ;;
            failed) echo "failed" ;;
            *) echo "inactive" ;;
        esac
    else
        echo "n/a"
    fi
}

get_uptime() {
    if service_exists "$1"; then
        START_TIME=$(systemctl show -p ActiveEnterTimestamp "$1" 2>/dev/null | cut -d= -f2)
        if [ -z "$START_TIME" ]; then
            echo "0"
        else
            START_SEC=$(date -d "$START_TIME" +%s 2>/dev/null)
            NOW_SEC=$(date +%s)
            echo $((NOW_SEC - START_SEC))
        fi
    else
        echo "n/a"
    fi
}

get_port() {

    if ! service_exists "$1"; then
        echo "n/a"
        return
    fi

    MAINPID=$(systemctl show -p MainPID "$1" 2>/dev/null | cut -d= -f2)

    if [ -z "$MAINPID" ] || [ "$MAINPID" -eq 0 ]; then
        echo "N/A"
        return
    fi

    PORT=$(sudo lsof -Pan -p "$MAINPID" -i 2>/dev/null | awk '/LISTEN/ {print $9}' | awk -F':' '{print $NF}' | sort -u | paste -sd "," -)

    [ -z "$PORT" ] && PORT="N/A"

    echo "$PORT"
}


# Detectar servicios alternativos
if service_exists "apache2"; then
    WEB="apache2"
elif service_exists "nginx"; then
    WEB="nginx"
else
    WEB="apache2"
fi

if service_exists "mysql"; then
    DB="mysql"
elif service_exists "mariadb"; then
    DB="mariadb"
else
    DB="mysql"
fi

if service_exists "vsftpd"; then
    SFTP="vsftpd"
elif service_exists "proftpd"; then
    SFTP="proftpd"
else
    SFTP="vsftpd"
fi

SERVICES=(
"$WEB"
"$DB"
"bind9"
"isc-dhcp-server"
"ssh"
"$SFTP"
"postfix"
"dovecot"
)

SERVICES_JSON="["

for SERVICE in "${SERVICES[@]}"; do

    STATE=$(get_status "$SERVICE")
    UPTIME=$(get_uptime "$SERVICE")
    PORT=$(get_port "$SERVICE")

    SERVICES_JSON+=$(cat <<EOF
{
  "Nom_servei": "$SERVICE",
  "Estat": "$STATE",
  "Uptime_segons": "$UPTIME",
  "Port_escolta": "$PORT"
},
EOF
)
done

SERVICES_JSON=$(echo "$SERVICES_JSON" | sed '$ s/,$//')
SERVICES_JSON+="]"

cat <<EOF > "$OUTPUT"
{
  "Estat_de_Serveis": $SERVICES_JSON
}
EOF

usuarios:


#!/bin/bash

OUTPUT_DIR="/var/www/dashboard/html/web/data/"
OUTPUT="$OUTPUT_DIR/usuaris_connections.json"

echo "[" > $OUTPUT

first=true

while read usuari terminal data hora origen
do
    if [[ "$origen" =~ \(.*\) ]]; then
        ip=$(echo "$origen" | tr -d '()')
        tipus="SSH"
    else
        ip="127.0.0.1"
        tipus="LOCAL"
    fi

    if [ "$first" = true ]; then
        first=false
    else
        echo "," >> $OUTPUT
    fi

    cat <<EOF >> $OUTPUT
{
  "usuari": "$usuari",
  "terminal": "$terminal",
  "ip": "$ip",
  "tipus": "$tipus",
  "data": "$data",
  "hora": "$hora"
}
EOF

done < <(who)

echo "]" >> $OUTPUT

echo "Fitxer JSON generat a: $OUTPUT"

