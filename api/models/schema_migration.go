package models
import "gorm.io/gorm"

type SchemaMigration struct {
	gorm.Model
	Id string `gorm:"type:varchar;primary_key;not null"`
}
