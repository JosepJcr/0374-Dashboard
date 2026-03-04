xusi ✮⋆˙
xusizz
𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃

xusi ✮⋆˙

 — 26/02/2026 10:31
subnetting
esq estas loco
Pelo coco — 26/02/2026 10:31
xd
xusi ✮⋆˙

 — 26/02/2026 10:31
y todo web
esq lo suspendo todo
Pelo coco — 26/02/2026 10:31
bombo

BRKKDSFSD
Pelo coco — 26/02/2026 10:38
TUUUUUUUUUU
EL YOEL ESTE ESTA MIMIENDO
JAJAJAJAJJAJAA
xusi ✮⋆˙

 — 26/02/2026 10:39
JAJAJA
SIEMPRE IGUAL
Pelo coco — 26/02/2026 10:39
real jajjajaja
Pelo coco — 26/02/2026 10:48
esque en USA son no brain
xusi ✮⋆˙

 — 26/02/2026 10:50
fr
xusi ✮⋆˙

 — 26/02/2026 11:59
el gon six seven
Pelo coco — 26/02/2026 12:00
real
Pelo coco — 27/02/2026 8:35
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>System Monitor ASIX1</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="img/DASHBOARDLOGO.ico" type="image/x-icon">
  <link rel="stylesheet" href="css/style.css">
  <script type="module" src="js/script.js"></script>
</head>

<body>
  <header class="topbar">
    <div class="topbar-left">
      <h1>System Monitor</h1>
      <span id="host-info">Loading system info…</span>
    </div>

    <div class="topbar-actions">
      <button id="reload-btn">Reload</button>
      <a href="https://github.com/JosepJcr/0374-Dashboard" target="_blank">
        <img src="img/github.svg" alt="GitHub" class="github-icon">
      </a>
    </div>
  </header>

  <main class="dashboard">

    <section class="card">
      <h2>CPU</h2>
      <div class="metric">
        <span>Usage</span>
        <strong id="cpu-percent">–</strong>
      </div>
      <div class="progress">
        <div id="cpu-bar"></div>
      </div>
      <small id="cpu-extra"></small>
    </section>

    <section class="card">
      <h2>RAM</h2>
      <div class="metric">
        <span>Used</span>
        <strong id="ram-percent">–</strong>
      </div>
      <div class="progress">
        <div id="ram-bar"></div>
      </div>
      <small id="ram-extra"></small>
    </section>

    <section class="card users wide">
      <h2>Users</h2>
      <div id="users-info"></div>
    </section>

    <section class="card wide">
      <h2>Network</h2>
      <div id="network-info"></div>
    </section>

    <section class="card">
      <h2>Storage</h2>
      <div id="storage-info"></div>
    </section>

    <section class="card processes">
      <h2>Top CPU Processes</h2>
      <div id="process-cpu"></div>
    </section>

    <section class="card processes">
      <h2>Top RAM Processes</h2>
      <div id="process-ram"></div>
    </section>

  </main>

  <footer class="footer">
    ASIX1 · Izan & Josep
  </footer>
</body>

</html>

message.txt
3 KB
/* ===== RESET ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===== BASE ===== */
body {
  font-family: system-ui, sans-serif;
  background: #0f1115;
  color: #e5e7eb;
}

/* ===== TOP BAR ===== */
.topbar {
  padding: 20px 30px;
  background: #111827;
  border-bottom: 1px solid #1f2933;
}

.topbar h1 {
  font-size: 18px;
}

.topbar span {
  font-size: 12px;
  color: #9ca3af;
}

/* ===== DASHBOARD GRID ===== */
.dashboard {
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

/* ===== CARDS ===== */
.card {
  background: #111827;
  border: 1px solid #1f2933;
  border-radius: 14px;
  padding: 20px;
}

.card h2 {
  font-size: 14px;
  margin-bottom: 16px;
  color: #f9fafb;
}

.card.wide {
  grid-column: span 2;
}

/* ===== METRICS ===== */
.metric {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 8px;
}

.progress {
  height: 6px;
  background: #1f2933;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress div {
  height: 100%;
  width: 0%;
  background: #22c55e;
  transition: width 0.3s ease;
}

small {
  color: #9ca3af;
  font-size: 11px;
}

/* ===== TABLES ===== */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

th, td {
  padding: 8px;
  border-bottom: 1px solid #1f2933;
}

th {
  color: #9ca3af;
  text-align: left;
}
... (125 líneas restantes)

message.txt
4 KB
// ===== SYSTEM =====
fetch('../data/system_info.json')
  .then(r => r.json())
  .then(s => {
    document.getElementById('host-info').textContent =
      `${s.HOSTNAME} · ${s.DISTRO_FULL} · Kernel ${s.KERNEL}`;

message.txt
5 KB
xusi ✮⋆˙

 — 27/02/2026 8:42
el tio este es un retrasado
ipad kid
todo el dia chillando
Pelo coco — 27/02/2026 8:42
real
xusi ✮⋆˙

 — 27/02/2026 8:42
y pegandolem al pc
wtf bro
Pelo coco — 27/02/2026 8:42
y pegandole al pc
que locura
xusi ✮⋆˙

 — 27/02/2026 9:02
uf q mal me cae
Pelo coco — 27/02/2026 9:03
quien
Pelo coco — 27/02/2026 9:40
connexions.json:
{
  "Connexions_Establertes": [{
  "Protocol": "tcp",
  "State": "ESTAB",
  "Local_IP": "10.0.1.4",
  "Local_Port": "22",
  "Remote_IP": "10.0.3.78",
  "Remote_Port": "61433"
},{
  "Protocol": "tcp",
  "State": "ESTAB",
  "Local_IP": "127.0.0.1",
  "Local_Port": "42720",
  "Remote_IP": "127.0.0.1",
  "Remote_Port": "37803"
},{
  "Protocol": "tcp",
  "State": "ESTAB",
  "Local_IP": "192.168.1.2",
  "Local_Port": "143",
  "Remote_IP": "192.168.1.50",
  "Remote_Port": "51746"
},{
  "Protocol": "tcp",
  "State": "ESTAB",
  "Local_IP": "127.0.0.1",
  "Local_Port": "37803",
  "Remote_IP": "127.0.0.1",
  "Remote_Port": "42720"
},{
  "Protocol": "tcp",
  "State": "ESTAB",
  "Local_IP": "10.0.1.4",
  "Local_Port": "22",
  "Remote_IP": "10.0.3.78",
  "Remote_Port": "50418"
},{
  "Protocol": "tcp",
  "State": "ESTAB",
  "Local_IP": "10.0.1.4",
  "Local_Port": "22",
  "Remote_IP": "10.0.3.78",
  "Remote_Port": "61434"
},{
  "Protocol": "tcp",
  "State": "ESTAB",
  "Local_IP": "192.168.1.2",
  "Local_Port": "143",
  "Remote_IP": "192.168.1.50",
  "Remote_Port": "51736"
}]
}
cpu_info.json:
{
  "CPU_MODEL": "AMD Ryzen 7 6800H with Radeon Graphics",
  "CPU_ARCH": "x86_64",
  "CPU_CORES": 2,
  "CPU_THREADS": 1,

message.txt
6 KB
Pelo coco — 27/02/2026 9:55
izanb@ibarrasa:~/scriptBash$ /bin/bash correu.sh
mkdir: cannot create directory '/var/lib/monitor_recursos': Permission denied
tee: /var/log/monitor_recursos.log: Permission denied
2026-02-27 08:53:37 === Inicio ciclo de monitorizacion ===
correu.sh: line 97: bc: command not found
correu.sh: line 104: bc: command not found

message.txt
3 KB
xusi ✮⋆˙

 — 27/02/2026 10:24
captura cron

tree de carpeta mas utilizadas (enseñar estructura)

CAPTURAS WEB ENTERA
xusi ✮⋆˙

 — 27/02/2026 10:39
#!/bin/bash
Archivo de salida
OUTPUT="/opt/monitoring/data/cpu_info.json"

Comprobar si existen comandos necesarios
for cmd in lscpu mpstat top awk; do
  command -v $cmd >/dev/null 2>&1 || { echo "$cmd no encontrado, instálalo."; exit 1; }
done

Detectar CPU
CPU_MODEL=$(lscpu | awk -F: '/Model name/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')
CPU_ARCH=$(lscpu | awk -F: '/Architecture/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')
CPU_CORES=$(lscpu | awk -F: '/^CPU(s)/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')
CPU_THREADS=$(lscpu | awk -F: '/Thread(s) per core/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')

Frecuencia actual del CPU (más confiable)
CPU_FREQ=$(awk -F: '/MHz/ {gsub(/^[ \t]+/, "", $2); print $2; exit}' /proc/cpuinfo)

Cache L3
CACHE_SIZE=$(lscpu | awk -F: '/L3 cache/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')

Carga promedio
LOAD_AVERAGE=$(uptime | awk -F'load average:' '{gsub(/^[ \t]+/, "", $2); print $1, $2, $3}')

Uso actual de CPU
CPU_USAGE=$(mpstat 1 1 | awk '/Average/ {printf "%.1f", 100 - $NF}')

Crear JSON
mkdir -p "$(dirname "$OUTPUT")"
cat <<EOF > "$OUTPUT"
{
  "CPU_MODEL": "$CPU_MODEL",
  "CPU_ARCH": "$CPU_ARCH",
  "CPU_CORES": $CPU_CORES,
  "CPU_THREADS": $CPU_THREADS,
  "CPU_FREQ_MHZ": $CPU_FREQ,
  "CACHE_L3": "$CACHE_SIZE",
  "CPU_USAGE_PERCENT": $CPU_USAGE,
  "LOAD_AVERAGE": "$LOAD_AVERAGE"
}
EOF

echo "Información de CPU guardada en $OUTPUT"
Pelo coco — 27/02/2026 10:43
#!/bin/bash

CPU_MODEL=$(grep "model name" /proc/cpuinfo | head -1 | awk -F': ' '{print $2}')
CPU_CORES=$(nproc)
CPU_THREADS=$(grep -c "processor" /proc/cpuinfo)
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)
CPU_FREQ=$(grep "cpu MHz" /proc/cpuinfo | head -1 | awk -F': ' '{print $2}' | cut -d'.' -f1)
LOAD_AVG=$(cat /proc/loadavg | awk '{print $1", "$2", "$3}')

cat > /opt/monitoring/data/cpu_info.json << EOF
{
  "CPU_MODEL": "$CPU_MODEL",
  "CPU_CORES": $CPU_CORES,
  "CPU_THREADS": $CPU_THREADS,
  "CPU_USAGE_PERCENT": $CPU_USAGE,
  "CPU_FREQ_MHZ": $CPU_FREQ,
  "LOAD_AVG_1_5_15": "$LOAD_AVG"
}
EOF
Pelo coco — 27/02/2026 12:26
Imagen
Imagen
Imagen
Imagen
Imagen
Imagen
Imagen
SERV A:

<!DOCTYPE html>
<html lang="en">

<head>

message.txt
3 KB
SERVB:

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>System Monitor ASIX1 – Servidor B</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/DASHBOARDLOGO.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <script type="module" src="js/script.js"></script>
</head>

<body>
    <header class="topbar">
        <div class="topbar-left">
            <h1>System Monitor – Servidor B</h1>
            <span id="host-info">Servidor B</span>
        </div>

        <div class="topbar-actions">
            <a href="index.html" class="server-link">← Servidor A</a>
            <button id="reload-btn">Reload</button>
            <a href="https://github.com/JosepJcr/0374-Dashboard" target="_blank">
                <img src="img/github.svg" alt="GitHub" class="github-icon">
            </a>
        </div>
    </header>

    <main class="dashboard">

        <section class="card wide">
            <h2>Connexions Establertes</h2>
            <div id="connexions-info"></div>
        </section>

        <section class="card wide">
            <h2>Estat de Serveis</h2>
            <div id="serveis-info"></div>
        </section>

    </main>

    <footer class="footer">
        ASIX1 · Izan & Josep
    </footer>
</body>

</html>
/* ===== RESET ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

message.txt
5 KB
// ===== SYSTEM =====
fetch('../data/system_info.json')
  .then(r => r.json())
  .then(s => {
    document.getElementById('host-info').textContent =
      `${s.HOSTNAME} · ${s.DISTRO_FULL} · Kernel ${s.KERNEL}`;

message.txt
8 KB
Pelo coco — 27/02/2026 12:34
Imagen
Imagen
﻿
Pelo coco
masterbarrasa
 
 
 
i hate 🥷🏽
// ===== SYSTEM =====
fetch('../data/system_info.json')
  .then(r => r.json())
  .then(s => {
    document.getElementById('host-info').textContent =
      `${s.HOSTNAME} · ${s.DISTRO_FULL} · Kernel ${s.KERNEL}`;
  });

// ===== CPU =====
fetch('../data/cpu_info.json')
  .then(r => r.json())
  .then(cpu => {
    const p = cpu.CPU_USAGE_PERCENT;
    document.getElementById('cpu-percent').textContent = `${p}%`;
    document.getElementById('cpu-extra').textContent =
      `${cpu.CPU_MODEL} · ${cpu.CPU_CORES} cores`;

    const bar = document.getElementById('cpu-bar');
    bar.style.width = p + '%';
    bar.style.background =
      p < 60 ? '#22c55e' : p < 80 ? '#facc15' : '#ef4444';
  });

// ===== RAM =====
fetch('../data/ram_info.json')
  .then(r => r.json())
  .then(ram => {
    const p = ram.PERCENT_USED;
    document.getElementById('ram-percent').textContent = `${p}%`;
    document.getElementById('ram-extra').textContent =
      `${ram.USED_RAM_MB} / ${ram.TOTAL_RAM_MB} MB`;

    const bar = document.getElementById('ram-bar');
    bar.style.width = p + '%';
    bar.style.background =
      p < 60 ? '#22c55e' : p < 80 ? '#facc15' : '#ef4444';
  });

// ===== NETWORK =====
fetch('../data/network_info.json')
  .then(r => r.json())
  .then(net => {
    let html = `<table><tr><th>IF</th><th>IP</th><th>RX</th><th>TX</th></tr>`;
    net.Interfaces.forEach(i => {
      html += `<tr>
        <td>${i.Interfaz}</td>
        <td>${i.IP}</td>
        <td>${i.RX_MB}</td>
        <td>${i.TX_MB}</td>
      </tr>`;
    });
    html += `</table>`;
    document.getElementById('network-info').innerHTML = html;
  });

// ===== STORAGE =====
fetch('../data/disk_info.json')
  .then(r => r.json())
  .then(disk => {
    const div = document.getElementById('storage-info');
    disk.Discos.forEach(d => {
      div.innerHTML += `
        <div class="metric">
          <span>${d.FS}</span>
          <strong>${d.Us_pct}%</strong>
        </div>
        <div class="progress">
          <div style="width:${d.Us_pct}%"></div>
        </div>
      `;
    });
  });

// ===== PROCESSES (CPU + RAM separated) =====
fetch('../data/process_info.json')
  .then(r => r.json())
  .then(p => {

    // --- TOP CPU ---
    const cpuDiv = document.getElementById('process-cpu');
    let cpuHtml = `<div class="process-list">`;

    p.TOP_5_CPU.forEach(proc => {
      cpuHtml += `
        <div class="process-row">
          <span class="process-name">${proc.Proceso}</span>
          <span class="process-value">${proc.CPU}%</span>
        </div>
      `;
    });

    cpuHtml += `</div>`;
    cpuDiv.innerHTML = cpuHtml;

    // --- TOP RAM ---
    const ramDiv = document.getElementById('process-ram');
    let ramHtml = `<div class="process-list">`;

    p.TOP_5_RAM.forEach(proc => {
      ramHtml += `
        <div class="process-row">
          <span class="process-name">${proc.Proceso}</span>
          <span class="process-value">${proc.RAM}%</span>
        </div>
      `;
    });

    ramHtml += `</div>`;
    ramDiv.innerHTML = ramHtml;
  });

// ===== BUTTON =====
document.getElementById('reload-btn').addEventListener('click', () => {
  location.reload();
});

// ===== USERS =====
// ===== USERS (CONNECTED USERS) =====
fetch('../data/usuaris_connections.json')
  .then(r => r.json())
  .then(users => {
    const usersDiv = document.getElementById('users-info');

    if (!Array.isArray(users) || users.length === 0) {
      usersDiv.innerHTML = '<p class="placeholder">No active users</p>';
      return;
    }

    let html = `
      <table>
        <tr>
          <th>User</th>
          <th>Terminal</th>
          <th>IP</th>
          <th>Type</th>
          <th>Date</th>
          <th>Hour</th>
        </tr>
    `;

    users.forEach(u => {
      html += `
        <tr>
          <td>${u.usuari}</td>
          <td>${u.terminal}</td>
          <td>${u.ip}</td>
          <td>${u.tipus}</td>
          <td>${u.data}</td>
          <td>${u.hora}</td>
        </tr>
      `;
    });

    html += `</table>`;
    usersDiv.innerHTML = html;
  })
  .catch(err => {
    console.error('Error usuaris_connections.json', err);
    document.getElementById('users-info').innerHTML =
      '<p class="placeholder">Users data not available</p>';
  });
