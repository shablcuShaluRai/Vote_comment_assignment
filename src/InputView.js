import ImagewithTitle from "./ImageWithTitle";
import VotingOptions from "./VotingOptions";

export default function InputView({
  votingOptions,
  mapDropDownListToName,
  allSelectedOptions,
  handleChange,
  title,
  setTitle,
  description,
  setDescription,
  handleAdd
}) {
  const isPersonalitySelected =
    Object.keys(allSelectedOptions).filter((key) => allSelectedOptions[key])
      .length > 0;
  return (
    <div className="commentlist-wrapper">
      <div className="input-wrapper">
        <ImagewithTitle />
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <VotingOptions
          votingOptions={votingOptions}
          mapDropDownListToName={mapDropDownListToName}
          allSelectedOptions={allSelectedOptions}
          handleChange={handleChange}
        />
        <textarea
          className="story"
          name="story"
          value={description}
          rows={5}
          cols={33}
          placeholder="Share your typology reasoning by commenting here"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div
          className="send-image"
          onClick={() => {
            if (title || isPersonalitySelected) handleAdd();
          }}
        >
          <i
            className={`${
              title || isPersonalitySelected
                ? "fa fa-send active"
                : "fa fa-send"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
