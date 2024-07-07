# SELab_HW1


<div dir="rtl">
    ۱. پوشه‌ی .git چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟</br>
        جواب: 
</div>

<div dir="rtl">
    ۲. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟</br>
        جواب:
</div>

<div dir="rtl">
    ۳. تفاوت دستورهای fetch و pull و merge و rebase و cherry-pick را بیان کنید.</br>
        جواب:
</div>

<div dir="rtl">
    ۴. تفاوت دستورهای reset و revert و restore و switch و checkout را بیان کنید.</br>
        جواب:
</div>

<div dir="rtl">
    ۵. منظور از stage یا همان index چیست؟ دستور stash چه کاری را انجام می‌دهد؟</br>
        جواب: Stage یا index همان وضعیت working directory قبل از کامیت است، در واقع همان تغییراتی که اضافه شده‌اند و قرار است که کامیت شوند. با دستور git add فایل‌هایی که تغییر کرده‌اند به index اضافه می‌شوند و تغییراتی که بعد از این دستور اعمال می‌شوند در ‌index دیده نمی‌شوند تا وقتی که دوباره دستور git add زده شود. با زدن دستور git commit تغییراتی که در index وجود دارند کامیت می‌شوند. </br>
دستور stash تغییراتی که در پروژه داده‌ایم و فعلا به آن‌ها نیازی نداریم ولی بعدا ممکن است لازم‌مان شود (تغییرات کامیت‌نشده)، را نگه می‌دارد. باز زدن دستور ‌git stash وضعیت فعلی working directory و تغییرات ذخیره می‌شوند و تغییرات به سر (head) آخرین کامیت برمی‌گردند (revert).
</div>
* [Reference1](https://stackoverflow.com/questions/12138207/is-the-git-staging-area-just-an-index)
* [Reference2](https://stackoverflow.com/questions/20537223/what-is-the-intended-use-case-for-git-stash)

<div dir="rtl">
    ۶. مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟</br>
        جواب: اسنپ‌شات همان استیت کل فولدرهای پروژه در یک زمان مشخص است و هر زمانی که کامیتی را انجام می‌دهیم گیت از تمام فایل‌های working directory اسنپ‌شات می‌گیرد و آن را در ریپوی پروژه ذخیره می‌کند. (اطلاعات اسنپ‌شات در فولدر .git/objects در ریپو ذخیره می‌شود و هر کامیتی به عنوان یک آبجکت در این فولدر ذخیره می‌شود) در working directory تغییرات روی فایل‌ها اعمال می‌شود و بعد با دستور git add تغییرات را stage می‌کنیم و در نهایت با دستور git commit گیت اسنپ‌شاتی از فایل‌هایی که در ‌staging area موجود هستند، می‌گیرد و آن را به طور دائم در ریپو نگه می‌دارد و در واقع هر کامیت نشان‌دهنده‌ی اسنپ‌شات کاملی از پروژه در زمان مشخصی است و شامل تمام فایل‌ها و متادیتا هایی مانند فرد کامیت‌کننده، زمان و پیام کامیت است. </br>
commit = snapshot + metadata
</div>
* [Refernce1](https://stackoverflow.com/questions/4964099/what-is-a-git-snapshot)

<div dir="rtl">
    ۷. تفاوت‌های local repository و remote repository چیست؟</br>
        جواب:
</div>

</div>
