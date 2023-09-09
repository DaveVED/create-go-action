# Use a more recent Go image
FROM golang:1.21 as builder

WORKDIR /app

# Optimize layer caching by fetching dependencies first
COPY go.mod go.sum ./
RUN go mod download

# Now copy the rest of the sources and build
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o app .

# Using distroless for a minimal final image
FROM gcr.io/distroless/static

# Copy the binary from the builder stage
COPY --from=builder /app/app /app

ENTRYPOINT ["/app"]
