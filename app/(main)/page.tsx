import FileDropper from "@/components/FileDropper";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-16">
        Приложение для регистрации животных
      </h1>

      <div>
        <section className="flex flex-col gap-5 w-[46vw]">
          <p>
            Приложение, созданное для анализа фото и видео материалов животных.
            Позволяет узнавать разновидности животных, их количество и время
            пребывания в кадре.
          </p>
          <FileDropper />
        </section>
      </div>
    </div>
  );
};

export default Page;
