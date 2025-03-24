import Typography from "../typography";

const PoweredBy = () => {
  return (
    <>
      <div className="flexitems-center w-full justify-center shrink-0">
        <Typography
          variant="h5"
          className="flex items-center py-5 max-md:pb-20 max-lg:py-2 justify-center gap-1"
        >
          <Typography variant="p"> Powered by</Typography>
          <Typography variant="p">
            <a
              href="https://arkone.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline text-blue-400"
            >
              ArkOne Softwares
            </a>
          </Typography>
        </Typography>
      </div>
    </>
  );
};

export default PoweredBy;
