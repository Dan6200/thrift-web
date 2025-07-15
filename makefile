# Variables
PKG_MANAGER = pnpm

.PHONY: all build run test clean

# Targets
all: build test start ## Build the project and test the application

install:
	@echo "Installing Nextjs application"
	$(PKG_MANAGER) install

build:
	@echo "Building Nextjs application"
	$(PKG_MANAGER) run build

start:
	@echo "Starting application"
	$(PKG_MANAGER) start

dev:
	@echo "Running in development"
	$(PKG_MANAGER) run dev

test:
	@echo "Running test suites"
	$(PKG_MANAGER) test

clean:
	rm -rf .next node_modules

reinstall:
	rm -rf node_modules pnpm-lock.yaml
	$(PKG_MANAGER) install

lint:
	$(PKG_MANAGER) run lint

format:
	$(PKG_MANAGER) run format


