function handleFormSubmit(event) {
     event.preventDefault()
       let result;
    let start = document.getElementById('start').value;
  let startDateEntered = new Date(start);
  let  today =  new Date();
  today.setHours(0, 0, 0, 0);
  let end = document.getElementById('end').value;
  let endtDateEntered = new Date(end);
let period = (endtDateEntered - startDateEntered)/ 86400000;
  
  let instrument = document.getElementById('instrument').value;
  let   multyply;

  const instruments = {
    bennetGuitar: { costBase: 25000, brand: 'Акустическая гитара Greg bennet' },
    phillProEms500: { costBase: 29000, brand: 'Акустическая гитара Phill pro ems 500' },
    sigmaDm15: { costBase: 72000, brand: 'Акустическая гитара Sigma DM-15+' },
    ibanezBtb200: { costBase: 31000, brand: 'Бас-гитара Ibanez Btb 200' },
    gibsonSgStandard: { costBase: 50000, brand: 'Электрогитара Gibson SG standard' },
    ibanezRg170: { costBase: 32000, brand: 'Электрогитара Ibanez rg170' },
    drumChair: { costBase: 6000, brand: 'Стул для барабанов' },
    poulMoriautCustom: { costBase: 54000, brand: 'Саксофон Альт "Poul Moriaut", "Custom", 202, год выпуска примерно 2002' },
    marshallMg15cfx: { costBase: 15000, brand: 'Комбоусилитель Marshall mg15cfx' },
    ldSystemsMei100g2: { costBase: 32000, brand: 'Ушной Мониторинг LD Systems MEI100g2' },
    headPhone: { costBase: 2500, brand: 'Наушники' },
    casioCdpS100: { costBase: 38500, brand: 'Пианино Casio cdp-s100' },
    casioCdp100: { costBase: 34000, brand: 'Пианино Casio cdp-100' },
    yamahaP125: { costBase: 50000, brand: 'Пианино Yamaha p125' },
    yamahaP45: { costBase: 40000, brand: 'Пианино Yamaha p45' },
    casioCtk810: { costBase: 12000, brand: 'Синтезатор Casio CTK 810' },
    casioLk266: { costBase: 15000, brand: 'Синтезатор Casio lk 266' },
    rodeNt1Kit: { costBase: 29000, brand: 'Микрофон Rode NT1-Kit' },
    kajon: { costBase: 15000, brand:"Мастеровой кахон" },
    strunal205waDvorak: { costBase: 50000, brand: 'Скрипка Strunal 205wa (Dvorak)' },
    alesisNitroMeshKit: { costBase: 51000, brand: 'Электробарабаны Alesis nitro mesh kit' },
    rolandTd1Dmk: { costBase: 60000, brand: 'Электробарабаны Roland Td1-dmk' },
  };
  
  const instrumentData = instruments[instrument];
  const errorElement = document.getElementById('error');
  const periodError = document.getElementById('periodError')
  const errorElements = document.getElementsByClassName("error");
  const startInput = document.querySelector('.startInput')
  const endInput = document.querySelector('.endInput')
 




  const devider = 30;
  const output = document.getElementById('result');
  if (startDateEntered < today) {
    // input date is earlier than today
    console.log(today)
 
    errorElement.innerText = 'Время которое вы ввели не может быть раньше сего дня';
    startInput.classList.add('error');
    output.innerText='error';
    output.classList.add('Введите данные в верном формате');
  } 
  if(period<0){
    periodError.innerText='Вы не можете сдать инструмент раньше, чем взяли';
    endInput.classList.add('error');
    output.classList.add('error');
    output.innerText='Введите данные в верном формате';
  }

  if(period===0){period=1}
  if (period <= 7) {
    multyply = instrumentData.costBase / (devider + period * 12);
  } else if (period <= 25) {
    multyply = instrumentData.costBase / (devider + period * 10);
  } else if (period < 60) {
    multyply = instrumentData.costBase / 280;
  } else {
    multyply = instrumentData.costBase / 330;
  }
   result = Math.round(period * multyply);

  if(period>0 && startDateEntered >= today){
    output.classList.remove('error');
    endInput.classList.remove('error');
    startInput.classList.remove('error');
     output.innerText = `Стоимость аренды "${instrumentData.brand}" на ${period} дней составит ${result} ₽`;

   
  }


  // const form = document.getElementById('calcID');
  // form.reset();
  errorElements.innerText=''
   // Reset the form values
 document.getElementById('calcID').reset();



}
  




  const applicantForm = document.getElementById('calcID')
  applicantForm.addEventListener('submit', handleFormSubmit)
  
  
