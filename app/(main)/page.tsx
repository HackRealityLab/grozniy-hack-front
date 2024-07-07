import FileDropper from "@/components/FileDropper";
import UploadyFileDropper from "@/components/UploadyFileDropper";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-16">
        Приложение для регистрации животных
      </h1>

      <div>
        <section className="flex flex-col gap-5 w-[46vw]">
          <p>
            Сервис для регистрации и отслеживания присутствия животных.
            Предоставляет информацию о количестве, видах животных и о времени
            пребывания их в кадре для каждой из фотоловушек
          </p>
          {/* <UploadyFileDropper /> */}
          <FileDropper />
        </section>
      </div>
    </div>
  );
};

export default Page;
