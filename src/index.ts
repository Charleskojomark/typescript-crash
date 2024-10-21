// Basic Types

let id: number = 5
let company: string = 'Charles Mark'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

//Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

//Tuple Array

let employee: [number,string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

// Union
let pid: string | number = 22
pid = 22
pid = '22'

// Enum
enum Direction1 {
    Up = 2,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

//objects
type User = {
    id: number,
    name: string,
    isUser?: boolean
} 

const user: User  = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number{
    return x + y
} 

function log(message: string | number | boolean): void {
    console.log(message)
}

// Interfaces
interface UserInterface {
    readonly idea?: number
    id: number
    name: string
    age?: number
} 

const user1: UserInterface = {
    id: 1,
    name: 'John',
    idea: 5
}

// Interface cannot be used with unions.

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

//Classes
class Person {
    // private id: number
    // protected id: number
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'hello')
console.log(brad.register())