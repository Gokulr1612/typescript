    window.addEventListener('load', (event) => {
        let appDiv: HTMLElement = document.getElementById('app')!;
        let imageDiv: HTMLElement = document.createElement('div');
        imageDiv.classList.add('image');
        let imgElem: HTMLImageElement = document.createElement('img');
        imgElem.src = `https://ej2.syncfusion.com/demos/src/grid/images/${imgData[iterationNum].Id}.png`;
        let captionDiv: HTMLElement = document.createElement('div');
        captionDiv.classList.add('captionElem');
        captionDiv.innerHTML = `${imgData[iterationNum].Caption}`;
        imageDiv.append(imgElem);
        imageDiv.append(captionDiv);
        appDiv.append(imageDiv);
    });

    let iterationNum: number = 1;

    let nextBtn: HTMLButtonElement =  document.getElementsByClassName('next-btn')[0].querySelector('button')!;
    nextBtn.onclick = (): void => {
        console.log('Next btn click', iterationNum)
        if(iterationNum !== 9){
            iterationNum++;
        } else{
            iterationNum = 1;
        }
        let refreshImageElem: HTMLImageElement = document.querySelector('img')!;
        refreshImageElem.src = `https://ej2.syncfusion.com/demos/src/grid/images/${iterationNum}.png`;
        let refreshCaptionElem: Element = document.querySelector('.captionElem')!;
        refreshCaptionElem.innerHTML = `${imgData[iterationNum].Caption}`;
    }

    let prevBtn: HTMLButtonElement = document.getElementsByClassName('prev-btn')[0].querySelector('button')!;
    prevBtn.onclick = (): void => {
        console.log('Prev btn click', iterationNum)
        if(iterationNum == 1){
            iterationNum = 9;
        } else{
            iterationNum--;
        }
        let refreshImageElem: HTMLImageElement = document.querySelector('img')!;
        refreshImageElem.src = `https://ej2.syncfusion.com/demos/src/grid/images/${iterationNum}.png`;
        let refreshCaptionElem: Element = document.querySelector('.captionElem')!;
        refreshCaptionElem.innerHTML = `${imgData[iterationNum].Caption}`;
    }

    
export let imgData: Array<ImageData> = [
    {
        Id: 1, url: 'https://ej2.syncfusion.com/demos/src/grid/images/1.png', Caption: 'Nancy'
    },
    {
        Id: 2, url: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', Caption: 'Andrew'
    },
    {
        Id: 3, url: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png', Caption: 'Janet'
    },
    {
        Id: 4, url: 'https://ej2.syncfusion.com/demos/src/grid/images/4.png', Caption: 'Margaret'
    },
    {
        Id: 5, url: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png', Caption: 'Steven'
    },
    {
        Id: 6, url: 'https://ej2.syncfusion.com/demos/src/grid/images/6.png', Caption: 'Michael'
    },
    {
        Id: 7, url: 'https://ej2.syncfusion.com/demos/src/grid/images/7.png', Caption: 'Robert'
    },
    {
        Id: 8, url: 'https://ej2.syncfusion.com/demos/src/grid/images/8.png', Caption: 'Laura'
    },
    {
        Id: 9, url: 'https://ej2.syncfusion.com/demos/src/grid/images/9.png', Caption: 'Anne'
    }];

    interface ImageData {
        Id: number,
        url: string,
        Caption: string
    }