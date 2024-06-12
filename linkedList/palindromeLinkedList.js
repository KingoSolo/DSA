var isPalindrome = function(head) {
    let slow = head, fast = head, prev, temp
  
    // Find the middle of the list
    while (fast && fast.next)
      slow = slow.next, fast = fast.next.next
  
    // Reverse the second half of the list
    prev = slow, slow = slow.next, prev.next = null
    while (slow)
      temp = slow.next, slow.next = prev, prev = slow, slow = temp
  
    // Compare the values of the nodes in the first and second halves of the list
    fast = head, slow = prev
    while (slow)
      if (fast.val !== slow.val) return false
      else fast = fast.next, slow = slow.next
    return true
  };