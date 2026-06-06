# BitChat - Sovereign Cryptographic Terminal

Terminal de mensajería **soberana y privada** que utiliza criptografía SHA-256 y redes P2P directas. BitChat no utiliza servidores centrales; toda la inteligencia y los datos residen exclusivamente en tu terminal.

## 🚀 Características Principales

### 1. Soberanía de Identidad
- **Sin Servidores**: No hay base de datos central. Tu identidad es un par de claves criptográficas generadas localmente.
- **Identidad Numérica**: Los usuarios se identifican únicamente por su ID Público (ej. número de celular), eliminando metadatos innecesarios.
- **Protección Anti-Secuestro**: Sistema de validación en red que impide que un tercero reclame tu ID Público si ya estás activo. Si se detecta un intento de suplantación, tus contactos son alertados automáticamente.

### 2. Privacidad Extrema (Handshake de 3 Capas)
- **Confirmación Manual**: Nadie puede enviarte mensajes sin que aceptes su solicitud de conexión.
- **Privacidad de Nickname**: Los nicknames son locales y privados. Nunca se comparten por la red; los pares solo ven IDs verificados.
- **Handshake Criptográfico**: Intercambio automático de la **Cuarta Credencial** para establecer un canal seguro único (**Quinta ID**) entre dos terminales.

### 3. Sincronización Multi-dispositivo P2P
- **Sesiones Concurrentes**: Puedes tener BitChat abierto en tu PC, móvil y tablet simultáneamente con la misma cuenta.
- **Sincronización Segura**: Transfiere tus contactos y mensajes entre tus propios dispositivos mediante un desafío criptográfico directo, sin pasar por la nube.

### 4. Gestión de Datos y Seguridad
- **Mensajería Offline**: Los mensajes se guardan localmente y se reintentan enviar automáticamente en cuanto el destinatario se conecta.
- **Deduplicación Inteligente**: Uso de UUIDs universales e índices únicos en base de datos para evitar mensajes repetidos.
- **Control Total**: Opciones para eliminar chats individuales o borrar permanentemente la cuenta y todos los datos locales (Wipe).

### 5. Interfaz Adaptativa (Responsive)
- **Terminal Universal**: Diseño optimizado tanto para monitores de escritorio como para pantallas móviles.
- **Modo Mobile**: Navegación fluida entre lista de contactos y chat en pantallas pequeñas.

## 🛠 Tecnología
- **Motor**: .NET 8 con WebView2 (Contenedor Nativo).
- **Core**: JavaScript Vanilla con arquitectura de Micro-Componentes (h-func).
- **Red**: PeerJS (WebRTC) para conexiones directas punto a punto.
- **Base de Datos**: IndexedDB (Local-first) con cifrado por derivación de contraseña maestra.
- **Criptografía**: SHA-256 para generación de credenciales y validación de canales.

## 📦 Instalación

### WinGet (Recomendado)
```powershell
winget install BitChat
```

### Manual
Descarga el último `BitChat_v1.0.0.zip` desde la sección de [Releases](https://github.com/calimpio/bitchat/releases), extráelo y ejecuta `BitChat.exe`.

---
*Desarrollado por Calimpio - "Tu terminal, tu soberanía."*
