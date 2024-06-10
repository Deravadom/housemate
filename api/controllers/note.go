package controllers

import (
	"github.com/gin-gonic/gin"
	"api/database"
	"api/models"
)

func getNotes(c *gin.Context) {
	var notes []models.Note
	database.Database.Find(&notes)
	c.JSON(200, notes)
}

func getNote(c *gin.Context) {
	var note models.Note
	id := c.Param("id")
	database.Database.First(&note, id)
	c.JSON(200, note)
}

func createNote(c *gin.Context) {
	var note models.Note
	c.BindJSON(&note)
	database.Database.Create(&note)
	c.JSON(200, note)
}

func updateNote(c *gin.Context) {
	var note models.Note
	id := c.Param("id")
	database.Database.First(&note, id)
	c.BindJSON(&note)
	database.Database.Save(&note)
	c.JSON(200, note)
}

func deleteNote(c *gin.Context) {
	var note models.Note
	id := c.Param("id")
	database.Database.First(&note, id)
	database.Database.Delete(&note)
	c.JSON(200, note)
}

func SetupNoteRoutes(r *gin.Engine) {
	r.GET("/notes", getNotes)
	r.POST("/notes", createNote)
	r.GET("/notes/:id", getNote)
	r.PUT("/notes/:id", updateNote)
	r.DELETE("/notes/:id", deleteNote)
}
