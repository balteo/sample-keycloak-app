#!/bin/bash

curl -X POST http://localhost/api/category -H 'Content-Type: application/json' -d '{"order": 4, "label": "Jeux", "description":"Pour tout le monde"}'
