// ! Merge Two Sorted Lists

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(); //*  Dummy node
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummy.next; 
}


function createList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (const value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next;
}


function printList(head) {
    let current = head;
    const values = [];
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(' -> '));
}


const list1 = createList([1, 2, 3]);
const list2 = createList([1, 2, 4]);

const mergedList = mergeTwoLists(list1, list2);

printList(mergedList); //* output: 1 -> 1 -> 2 -> 2 -> 3 -> 4
