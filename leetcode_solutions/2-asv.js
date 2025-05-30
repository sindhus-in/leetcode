/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const value = (l) => 
    (l ? l.val : 0)

const next = (l) => 
    (l ? l.next : null)

function addTwoWithCarry(l1, l2, carry) {
    if (carry == 0) {
        if (l1 == null) {
            return l2
        }
        if (l2 == null) {
            return l1
        }
    }
    
    const current = value(l1) + value(l2) + carry 
    const lastDigit = current > 9 ? current - 10 : current
    const newCarry = current > 9 ? 1 : 0
    const rhs = addTwoWithCarry(next(l1), next(l2), newCarry)
    return new ListNode(lastDigit, rhs)
}

function addTwoNumbers(l1, l2) {
    return addTwoWithCarry(l1, l2, 0)
}

/*
 *    TESTING CODE  
 */
function createLink(arr, index) {
    if (index == undefined) {
        index = 0
    }
    if (index == arr.length) {
        return null
    }
    return new ListNode(arr[index], createLink(arr, index + 1))
}

console.log(createLink([2, 4, 3]))

console.log(
    addTwoNumbers(createLink([2, 4, 3]), 
                  createLink([5, 6, 4])))


function addTwoWithCarryWithLoop(l1, l2) {
    const ret = new ListNode()
    const ptr = ret

    while (carry !=0 || l1 != null || l2 != null) {
        ptr.next = new ListNode()
        ptr = ptr.next

        const current = value(l1) + value(l2) + carry 
        const lastDigit = current > 9 ? current - 10 : current
        const newCarry = current > 9 ? 1 : 0

        ptr.val = lastDigit 
        carry = newCarry
        
        l1 = next(l1)
        l2 = next(l2) 
    }

    return ret.next;

    // const current = value(l1) + value(l2) + carry 
    // const lastDigit = current > 9 ? current - 10 : current
    // const newCarry = current > 9 ? 1 : 0
    // const rhs = addTwoWithCarry(next(l1), next(l2), newCarry)
    // return new ListNode(lastDigit, rhs)
}
