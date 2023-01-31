class Human
{
    constructor(name,age,address,id)
    {
        this.name=name
        this.age=age
        this.address=address
        this.id=id
    }
    Say()
    {
        return "Hello I'm "+this.name
    }
}
export default Human