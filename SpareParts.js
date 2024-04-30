 let Count = 1;

                    function ChangeImage() {
                    const image = document.getElementById('image');
                    if (Count === 1) {
                        image.src = 'Accessory1.png';
                        
                    }
                    if  (Count === 2) {
                        image.src = 'Accessory2.png';
                        
                    }
                    if (Count === 3) {
                        image.src = 'Accessory3.jpeg';
                        
                    }
                    Count = (Count % 3) + 1;
                    
                }