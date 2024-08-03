// ! Add Two Numbers

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
  
  function addTwoNums(l1, l2) {
    let pointerA = l1;
    let pointerB = l2;
  
    let carry = 0;
    let result = new ListNode(0); //* Dummy head node
    let currentNode = result;
  
    while (pointerA !== null || pointerB !== null || carry > 0) {
      let a = pointerA !== null ? pointerA.val : 0;
      let b = pointerB !== null ? pointerB.val : 0;
  
      let sum = a + b + carry;
      carry = Math.floor(sum / 10); 
      currentNode.next = new ListNode(sum % 10);
      currentNode = currentNode.next; 
  
     
      if (pointerA !== null) {
        pointerA = pointerA.next;
      }
      if (pointerB !== null) {
        pointerB = pointerB.next;
      }
    }
  
    return result.next; 
  }
  

  function printLinkedList(head) {
    let values = [];
    while (head !== null) {
      values.push(head.val);
      head = head.next;
    }
    console.log(values.join(' -> '));
  }

  let l1 = new ListNode(2, new ListNode(4, new ListNode(3))); //* 342
  let l2 = new ListNode(5, new ListNode(6, new ListNode(4))); //* 465
  let result = addTwoNums(l1, l2);
  console.log("Sum:", end=" ");
  printLinkedList(result); 
  