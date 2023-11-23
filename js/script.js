   window.addEventListener('DOMContentLoaded', (event) => {
        const memberList = document.getElementById('memberList');
        const rows = Array.from(memberList.getElementsByTagName('tr'));
        shuffleArray(rows);
        rows.forEach((row) => memberList.appendChild(row));

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    });
  
  
  // تحديد عنصر نموذج الاتصال
    const contactForm = document.querySelector('form');

    // إضافة حدث مستمع لعنصر نموذج الاتصال عند الضغط على زر الإرسال
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // منع إرسال النموذج الافتراضي

      // التحقق من إدخال البيانات في حقول النموذج
      const nameInput = contactForm.querySelector('input[name="name"]');
      const numberInput = contactForm.querySelector('input[name="number"]');
      const guestsInput = contactForm.querySelector('input[name="guests"]');

      if (nameInput.value === '' || numberInput.value === '' || guestsInput.value === '') {
        alert('Please fill in all the form fields.');
        return; // إيقاف التنفيذ إذا لم يتم إدخال بيانات
      }

      // قم بتنفيذ السلوك الذي ترغب فيه عند إرسال النموذج
      // هنا يمكنك إرسال البيانات إلى الخادم أو تنفيذ أي سلوك إضافي

      // مثال: عرض رسالة تأكيد بعد إرسال النموذج
      alert('Message sent successfully!');
    });
  



	