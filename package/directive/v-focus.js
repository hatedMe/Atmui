let focus = {
    inserted: function(el , binding) {
        if( binding.value ) el.focus();
    }
}

export default focus;