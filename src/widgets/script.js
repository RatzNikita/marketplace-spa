

const a = (years,value,) => {
    const x = 0.15
    let result = 1
    for(let i = 0; i < years; i++) {
        result = result + (result * x)
        result  = result + (value * 12)
    }
    console.log(Math.round(result))
}

a(10,35000)

// 13

//8.5 + 8.5
