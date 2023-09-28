var deleteDuplicates = function(head){
    if(!head){
        return head;
    }
    const mainlist = head;
    while(head!==null){
        if(head.next!==null && head.value ===head.next.value){
            head.next = head.next.next;
        }

        else{
            head = head.next;
        }
    }

    return mainlist;
}