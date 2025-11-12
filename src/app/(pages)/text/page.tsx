import React from "react";
import {
  TypographyBig,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInputErrorMassage,
  TypographyLarge,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
function page() {
  return (
    <>
      <TypographyBig className="tracking-widest ">
        DO IT <span className="text-primary">RIGHT</span>
      </TypographyBig>
      <SectionLayout>
        <div className="max-w-2xl mx-auto p-8 space-y-8">
          <TypographyH1>این یک عنوان اصلی است</TypographyH1>

          <TypographyH2>بخش اول: مقدمه</TypographyH2>

          <TypographyLead>
            این متن مقدماتی است که معمولاً برای جلب توجه کاربر استفاده می‌شه.
            کمی بزرگ‌تر و برجسته‌تر از متن عادی.
          </TypographyLead>

          <TypographyP>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </TypographyP>

          <TypographyP>
            پاراگراف دوم که به طور خودکار فاصله بالایی داره چون اولین نیست.
          </TypographyP>

          <TypographyH3>ویژگی‌های محصول</TypographyH3>

          <TypographyList
            listItems={["طراحی زیبا و مدرن", "سرعت بالا", "پشتیبانی ۲۴ ساعته"]}
          />

          <TypographyH4>نحوه استفاده</TypographyH4>

          <TypographyLarge>فقط ۳ مرحله تا شروع!</TypographyLarge>

          <TypographySmall>
            نسخه ۱.۰.۰ • آخرین بروزرسانی: ۱۴۰۴/۰۸/۱۵
          </TypographySmall>

          <TypographyMuted>
            این متن کم‌رنگ و فرعی است، معمولاً برای توضیحات جزئی استفاده می‌شه.
          </TypographyMuted>

          <div className="space-y-1">
            <input
              type="text"
              placeholder="ایمیل خود را وارد کنید"
              className="border rounded-md px-3 py-2 w-full"
            />
            <TypographyInputErrorMassage>
              ایمیل وارد شده معتبر نیست.
            </TypographyInputErrorMassage>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default page;
