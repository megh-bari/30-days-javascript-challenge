class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKSortedList(lists) {
  if (lists.length === 0) {
    return null;
  }

  for (let i = 1; i < lists.length; i++) {
    lists[0] = merge(lists[0], lists[i]);
  }

  return lists[0];
}

function merge(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2);
    return l1;
  } else {
    l2.next = merge(l1, l2.next);
    return l2;
  }
}

function printList(node) {
  let result = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result.join(" -> ");
}

const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const lists = [l1];
console.log(printList(mergeKSortedList(lists))); //* Output: 1->3->5
