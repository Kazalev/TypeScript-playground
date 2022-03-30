let displayName: string = `Jess's standing desk`
let inventoryType: string = 'furniture'
let trackingNumber: string = 'FD12345'
let createDate: Date = new Date()
type Cost = number | string
let originalCost: Cost // This can be either a number or a string, but not any other type

// Type inference - ts finds errors in code compile time (ex. displayName = 10, will throw error)
// Gradual typing - when and how ts aplys typing (ex. use 'any' type)

if (typeof originalCost === 'number') { let cost: number = originalCost }
else { let x = originalCost }

enum InventoryItemType {
    Computer = 'computer',
    Furniture = 'furniture'
}

interface InventoryItem {
    displayName: string,
    // inventoryType: InventoryItemType, // Using enum
    inventoryType: "computer" | "furniture", // Using literal types
    trackingNumber: string,
    readonly createDate: Date,
    originalCost?: number // This is optional (?)
    addNote?: (note: string) => string // This is method that takes a srting and returns a string
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber)

// inventoryItem.createDate = new Date()

saveInventoryItem({
    displayName: 'HP OMEN 15',
    // inventoryType: InventoryItemType.Computer,
    inventoryType: 'computer',
    trackingNumber: 'MBP123456',
    createDate: new Date(),
    originalCost: 2800
})

function clone<T, U>(source: T, options: U): T {
    const serialized = JSON.stringify(source)
    return JSON.parse(serialized)
}

const cloned = clone(inventoryItem, {deep: true})

interface KeyValuePair<TKey, TValue> {
    key: TKey
    value: TValue
}

// let keyValuePair: KeyValuePair<string, number> = { Key: "something", Value: 1234 }
// let keyValuePair2: KeyValuePair<number, boolean> = { Key: 123, Value: true }

declare var Vue: any;