package main

import (
	// "github.com/gin-gonic/gin"
	"api/database"
	"api/models"
	"github.com/joho/godotenv"
	"log"
	"fmt"
)

func main() {
	// Load env
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	database.Connect()
	database.Database.AutoMigrate(&models.SchemaMigration{})
}
