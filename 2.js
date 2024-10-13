/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function traverseListNode(listNode, listArray) {
    if (listArray === undefined) {
        listArray = [];
    }
        
    if (listNode != null) {
        listArray.push(listNode.val)
        traverseListNode(listNode.next, listArray);
    }
    return listArray
}

function makeListNode(listArray) {
    if (listArray.length != 0) {
        var listNode = new ListNode(); 
        listNode.val = listArray.shift() 
        listNode.next = makeListNode(listArray)
        return listNode
    } else {
        return null
    }
}

var addTwoNumbers = function(l1, l2) {
    var resultArray = [];
    var l1Array = traverseListNode(l1),
        l2Array = traverseListNode(l2);
    
    for (i=0; i< Math.max(l1Array.length, l2Array.length); i++) {
        if (i < l2Array.length && i < l1Array.length) {
            resultArray.push(l1Array[i] + l2Array[i]);
        } else if (i < l1Array.length) {
            resultArray.push(l1Array[i]);
        } else if (i < l2Array.length) {
            resultArray.push(l2Array[i]);
        }
    }
    
    for (i=0; i < resultArray.length; i++) {
        if (resultArray[i] > 9) {
            resultArray[i] -= 10
            if (i + 1 < resultArray.length) {
                resultArray[i + 1] += 1
            } else {
                resultArray.push(1);
                break;
            }
        }
    }
    return makeListNode(resultArray)
};

var  l1 = new ListNode(2, new ListNode(4, new ListNode(3))),
    l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));

var l1 = new ListNode()
    l2 = new ListNode();
console.log(addTwoNumbers(l1, l2))

var l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))), 
    l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
console.log(addTwoNumbers(l1, l2))