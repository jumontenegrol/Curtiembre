# Web Curtiembre

## Estructura
- `index.html` – contenido · `css/styles.css` – diseño · `js/main.js` – animaciones/traducción
- `js/products.js` – **aquí agregas productos y testimonios** (copia un bloque `{ ... }`)
- `assets/videos/video.mp4` y `assets/img/*.jpg` – tus archivos (nombres listados en `products.js`; también `hero.jpg`, `nosotros-1.jpg`, `ambiente.jpg`, `contacto.jpg`)
- `_headers` – seguridad (HSTS, CSP, anti-clickjacking) que Netlify aplica solo

## Publicar (gratis)
1. Sube la carpeta a un repositorio de GitHub.
2. Netlify → Add new site → Import from Git → elige el repo (Build command vacío, Publish directory `.`).
3. Cada `git push` actualiza la web. El formulario de contacto funciona solo (Netlify Forms).
Alternativas gratis: Cloudflare Pages (mejor CDN y protección DDoS) o Vercel.

## Google Translate
Ya está integrado: botones ES / EN / FR en el menú. No requiere cuenta ni clave. Para que no traduzca algo (ej. el nombre de la marca) añade `class="notranslate"`.

## Dominio
1. Compra en Cloudflare Registrar o Namecheap (.com ≈ 10–15 USD/año; .co ≈ 25–30 USD/año; evita complementos caros).
2. Netlify → Domain management → Add custom domain → sigue los DNS que te indica.
3. HTTPS (Let's Encrypt) se activa solo.

## Seguridad extra (recomendado)
- Poner el dominio detrás de Cloudflare (plan gratis): DDoS, WAF y caché.
- Activar 2FA en GitHub, Netlify y el registrador de dominio.
- Probar en https://securityheaders.com y https://observatory.mozilla.org tras publicar.
