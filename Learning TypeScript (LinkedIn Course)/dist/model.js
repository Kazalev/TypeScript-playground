let displayName = `Jess's standing desk`;
let inventoryType = 'furniture';
let trackingNumber = 'FD12345';
let createDate = new Date();
let originalCost; // This can be either a number or a string, but not any other type
// Type inference - ts finds errors in code compile time (ex. displayName = 10, will throw error)
// Gradual typing - when and how ts aplys typing (ex. use 'any' type)
if (typeof originalCost === 'number') {
    let cost = originalCost;
}
else {
    let x = originalCost;
}
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
let inventoryItem = getInventoryItem(trackingNumber);
// inventoryItem.createDate = new Date()
saveInventoryItem({
    displayName: 'HP OMEN 15',
    // inventoryType: InventoryItemType.Computer,
    inventoryType: 'computer',
    trackingNumber: 'MBP123456',
    createDate: new Date(),
    originalCost: 2800
});
function clone(source, options) {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
const cloned = clone(inventoryItem, { deep: true });
