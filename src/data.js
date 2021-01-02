import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
    return [
        {
            name: "Frozen Firs",
            cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            artist:"goosetaf",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=10313",
            color:["#E5C6D5","#1F487C"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Hereafter",
            cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            artist:"Makzo",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=11770",
            color:["#4F65A4","#CB746C"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Lilo",
            cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist:"The Field Tapes",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=11244",
            color:["#AAB384","#50526B"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Foggy Road",
            cover:"https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            artist:"Toonorth",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=7834",
            color:["#58ADF9","#153234"],
            id: uuidv4(),
            active: false
        }         
    ]
}

export default chillHop;