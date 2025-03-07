    function toOpenModal() {        
        const buttonOpenModal = document.querySelectorAll('#toOpenModal');
        const toCatchModal = document.querySelector('#configModal');

        
        buttonOpenModal.forEach(button => {
            button.addEventListener('click', () => {
                toCatchModal.showModal();
            });
        });

        toCloseModal();
    }

    function toCloseModal() {
        const closeModalButton = document.querySelector('#closeModal');
        const toCatchModalAgain = document.querySelector('#configModal');

        if (closeModalButton) {
            closeModalButton.addEventListener('click', () => {
                toCatchModalAgain.close();
            });
        }
    }

    
    toOpenModal();

