package main

import (
	"fmt"
	"os"
)

func main() {
	name := os.Getenv("INPUT_NAME")

	output := fmt.Sprintf("Hello %s", name)

	fmt.Println(fmt.Sprintf(`::set-output name=myName::%s`, output))
}