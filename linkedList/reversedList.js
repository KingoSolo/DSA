//Given the head of a singly linked list, reverse the list, and return the reversed list.
class Node{
    constructor(element){
        this.element = element
        this.next=null
    }
}

function reversedList(head){
    let prev = null
    let current = head 

    while(current !== null){
        const nextNode = current.next
        current.next = prev
        prev = current 
        current = nextNode
    }
return prev

}
