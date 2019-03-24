//class Items
class Items{
    constructor(title=" ", nick= "", bg= " ", linking=" "){
        this.name = title;
        this.background = bg;
        this.link = linking;
        this.nickname = nick;
    }

    getName(){
        return this.name;
    }
    getBg(){
        return this.background;
    }
    getNick(){
        return this.nickname;
    }
    getLink(){
        return this.link;
    }
}