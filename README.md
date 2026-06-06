# BitChat - Sovereign Cryptographic Terminal 📱🔒

BitChat es una terminal de mensajería **soberana, privada y descentralizada**. Diseñada bajo la filosofía de "Confianza Cero", BitChat elimina la necesidad de servidores centrales para el almacenamiento o enrutamiento de tus conversaciones, devolviendo el control total de la identidad y los datos al usuario.

---

## ✨ Características Principales

- **Identidad Soberana:** No requiere correos electrónicos ni servidores de registro. Tu identidad se genera matemáticamente a partir de tu número de celular y una contraseña maestra.
- **Arquitectura P2P:** Conexiones directas entre dispositivos mediante protocolos WebRTC (PeerJS).
- **Criptografía Robusta:** Handshakes validados mediante SHA-256 para prevenir suplantaciones de identidad.
- **Persistencia Local:** Los mensajes y credenciales se almacenan exclusivamente en tu dispositivo usando **IndexedDB**.
- **Sincronización Inteligente:** Envía mensajes aunque el destinatario esté offline; BitChat los entregará automáticamente en cuanto detecte que el nodo vuelve a estar en línea.
- **Estados de Entrega:**
  - `✓` Guardado localmente.
  - `✓✓` Entregado al destinatario.
  - `✓✓` (Verde) Leído y sincronizado.

---

## 🛠️ Arquitectura Técnica

BitChat utiliza una jerarquía de credenciales para garantizar la seguridad:

1.  **ID Público:** Tu número de celular (usado para enrutamiento).
2.  **ID Privado:** Tu Nickname interno.
3.  **Contraseña Maestra:** Nunca sale de tu dispositivo.
4.  **4ta Credencial:** Un hash SHA-256 derivado de los 3 datos anteriores, intercambiado durante el handshake inicial para validar la identidad del contacto.
5.  **5ta ID (Canal Seguro):** Un identificador de canal único generado dinámicamente entre dos nodos tras un handshake exitoso.

---

## 🚀 Instalación (Windows)

Puedes instalar BitChat directamente desde la terminal de Windows usando **Winget**:

```powershell
winget install Calimpio.BitChat
```

### Compilación desde el código fuente
Si deseas compilar tu propio binario:
1. Asegúrate de tener instalado el SDK de .NET 8.0 o superior.
2. Ejecuta:
   ```powershell
   dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true
   ```

---

## 🔒 Privacidad y Seguridad

- **Sin Servidores:** No hay una base de datos central que pueda ser hackeada o censurada.
- **Código Abierto:** La transparencia es la base de la seguridad criptográfica. Cualquiera puede auditar el proceso de derivación de llaves.
- **Zero-Data Tracking:** BitChat no recolecta telemetría, metadatos ni logs de usuario.

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para la soberanía digital por Calimpio.**
