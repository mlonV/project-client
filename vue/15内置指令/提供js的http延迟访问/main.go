package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	// "time"
	// "os/exec"
)

// 访问方式  2 代表延迟两秒（可修改）
// http://127.0.0.1:8080/getjs/2/js

type GetJS struct{}

func (g GetJS) getjs(ctx *gin.Context) {
	t := ctx.Param("time")
	fmt.Println(t)
	tInt, err := strconv.Atoi(t)
	if err != nil {
		return
	}
	time.Sleep(time.Second * time.Duration(tInt))
	// ctx.HTML(http.StatusOK, "./vue.min.js", nil)
	// ctx.Header("content-disposition", `attachment; filename=`+"vue.min.js")
	f, err := os.Open("./vue.js")
	if err != nil {
		panic("open file err ")
	}
	defer f.Close()

	buf, err := ioutil.ReadAll(f)
	if err != nil {
		panic(err)
	}
	// fmt.Println(string(buf))
	ctx.Writer.WriteString(string(buf))
	// ctx.Data(200, "", buf)
}

func main() {

	router := gin.Default()
	gjs := &GetJS{}
	router.GET("/getjs/:time/js", gjs.getjs)

	router.Run()
}
