# ===========================
# STAGE 1 — BUILD
# ===========================
FROM node:20-alpine AS build

WORKDIR /app

# Copiar ficheiros de dependências
COPY package.json package-lock.json* ./

# Instalar todas as dependências (incluindo dev)
RUN npm install

# Copiar todo o código
COPY . .

# Fazer build do TypeScript → dist/
RUN npm run build


# ===========================
# STAGE 2 — RUNTIME
# ===========================
FROM node:20-alpine

WORKDIR /app

# Copiar apenas package.json para instalar dependências de produção
COPY package.json package-lock.json* ./

# Instalar apenas dependências de produção
RUN npm install --production

# Copiar build final
COPY --from=build /app/dist ./dist

# Copiar env (opcional, ver abaixo)
COPY .env .env

# Expor a porta de runtime
EXPOSE 3000

# Comando para arrancar o servidor já compilado
CMD ["node", "dist/index.js"]