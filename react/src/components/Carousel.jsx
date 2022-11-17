export default function Carousel({ onInput }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <span
        style={{ alignSelf: "center", border: "solid", padding: "20px" }}
        onClick={() => {
          onInput("work-life-balances");
        }}
      >
        Work life balance
      </span>
      <span
        style={{ alignSelf: "center", border: "solid", padding: "20px" }}
        onClick={() => {
          onInput("diversity-inclusions");
        }}
      >
        Diversity and inclusion
      </span>
      <span
        style={{ alignSelf: "center", border: "solid", padding: "20px" }}
        onClick={() => {
          onInput("benefits-compensations");
        }}
      >
        Benefits and Compensation
      </span>
      <span
        style={{ alignSelf: "center", border: "solid", padding: "20px" }}
        onClick={() => {
          onInput("social-responsibilities");
        }}
      >
        Sustainability
      </span>
    </div>
  );
}
