import { useState } from "react";
import InputView from "./InputView";
import CommentsLists from "./CommentsLists";
import Filter from "./Filter";
import {
  VOTING_OPTIONS,
  DEFAULT_COMMENTS,
  mapDropDownListToName,
  selectedDefaultValues
} from "./constants";
import "./styles.css";

export default function App() {
  const [allSelectedOptions, setSelectedOptions] = useState(
    selectedDefaultValues
  );
  const [commentsLists, setCommentList] = useState(DEFAULT_COMMENTS);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isVoteCommentClick, setVoteCommentClick] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectSortBy, setSelectSortBy] = useState("Recent");

  const handleChange = (name, value) => {
    setSelectedOptions({
      ...allSelectedOptions,
      [name]: value
    });
  };

  const handleAdd = () => {
    const obj = {
      title,
      description,
      ...allSelectedOptions,
      like: 0,
      updated: false,
      timeStamp: +new Date()
    };
    commentsLists.unshift(obj);
    setCommentList(commentsLists);
    setSelectedOptions(selectedDefaultValues);
    setTitle("");
    setDescription("");
  };

  const handleUpdateLike = (index) => {
    const duplicateCommentList = [...commentsLists];
    const selectedCommentlist = duplicateCommentList[index];
    const obj = {
      ...selectedCommentlist,
      like: selectedCommentlist.updated
        ? selectedCommentlist.like - 1
        : selectedCommentlist.like + 1,
      updated: !selectedCommentlist.updated
    };
    duplicateCommentList[index] = obj;
    setCommentList(duplicateCommentList);
  };

  const filteredCommentList =
    selectedFilter === "All"
      ? commentsLists
      : commentsLists.filter((ar) => ar?.[selectedFilter.toLowerCase()]);
  const sortedCommentList =
    selectSortBy === "Recent"
      ? filteredCommentList.sort(
          (previous, current) => current.timeStamp - previous.timeStamp
        )
      : filteredCommentList.sort(
          (previous, current) => current.like - previous.like
        );
  return (
    <div className="container">
      <h1 className="text">Boo</h1>
      <div className="comment-vote-btn-wrap">
        <h2 className="comment-text">Comments</h2>
        <button
          className="bubble typography"
          onClick={() => setVoteCommentClick(!isVoteCommentClick)}
        >
          VOTE/COMMENT
        </button>
      </div>
      <div>
        <Filter
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          setSelectSortBy={setSelectSortBy}
        />
      </div>
      {isVoteCommentClick && (
        <InputView
          votingOptions={VOTING_OPTIONS}
          mapDropDownListToName={mapDropDownListToName}
          allSelectedOptions={allSelectedOptions}
          handleChange={handleChange}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          handleAdd={handleAdd}
        />
      )}

      <CommentsLists
        commentList={sortedCommentList}
        handleUpdateLike={handleUpdateLike}
      />
    </div>
  );
}
