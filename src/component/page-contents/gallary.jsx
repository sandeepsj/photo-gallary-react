import React, { Component } from "react";
import axios from "axios";
import folderIcon from "../../assets/images/folderIcon.jpg";
//import folderIcon from "../../images/assets/folderIcon";
axios.defaults.withCredentials = true;

function buildFileSelector() {
  const fileSelector = document.createElement("input");
  fileSelector.setAttribute("type", "file");
  return fileSelector;
}

class Gallary extends Component {
  state = {
    images: [],
    folders: [],
    curPath: "",
    selectedImg: undefined,
  };
  rename = (newName) => {
    axios
      .post("/rename", {
        path: `storage/${this.props.state.me}${this.state.curPath}`,
        oldName: this.state.selectedImg,
        newName: newName,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  delete_file = () => {
    axios
      .post("/delete_file", {
        file: `storage/${this.props.state.me}${this.state.curPath}/${this.state.selectedImg}`,
      })
      .then((res) => {
        console.log(res);
        this.getImages();
        alert("Successfully deleted");
      })
      .catch((err) => console.log(err));
  };
  fileSelector = buildFileSelector();
  componentDidMount() {
    this.getImages();
  }
  gotoPath = (folder) => {
    this.setState(
      {
        ...this.state,
        curPath: this.state.curPath + `/${folder}`,
      },
      () => this.getImages()
    );
  };
  goBackPath = () => {
    var path = this.state.curPath.split("/");
    path.pop();
    path = path.join("/");
    this.setState(
      {
        ...this.state,
        curPath: path,
      },
      () => this.getImages()
    );
  };
  getImages = () => {
    axios
      .post("/getImagesAuth", { path: this.state.curPath })
      .then((res) => {
        this.setState({
          ...this.state,
          images: res.data["images"],
          folders: res.data["folders"],
        });
        console.log("Sucessfully recieved files in ." + res);
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  };

  render() {
    return (
      <div class="container">
        <p>
          {/* <span style={{ float: "left", padding: "2px" }}>
          {this.state.curPath}
        </span> */}

          <button
            type="button"
            class="btn btn-link"
            style={{ float: "right" }}
            onClick={this.goBackPath}
          >
            Back
          </button>

          <button
            type="button"
            class="btn btn-warning"
            style={{ float: "right" }}
            onClick={() => this.fileSelector.click()}
          >
            Upload here
          </button>
          <input type="file" hidden />
          <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">
            Gallery
          </h1>
        </p>

        <hr class="mt-2 mb-5" />

        <div class="row text-center text-lg-left">
          {this.state.folders.map((folder) => (
            <div
              class="col-lg-3 col-md-4 col-6"
              onClick={() => this.gotoPath(folder)}
              key={folder}
            >
              <figure class="figure">
                <img
                  class="img-fluid img-thumbnail"
                  src={folderIcon}
                  alt={"not available"}
                />
                <figcaption class="figure-caption text-center">
                  {folder}
                </figcaption>
              </figure>
            </div>
          ))}
          {this.state.images.map((file) => (
            <div class="col-lg-3 col-md-4 col-6" key={file}>
              <figure class="figure">
                <img
                  className="img-fluid img-thumbnail"
                  src={`storage/${this.props.state.me}${this.state.curPath}/${file}`}
                  alt={"not available"}
                  data-toggle="modal"
                  data-target=".modalVal"
                  onClick={() => {
                    this.setState({ ...this.state, selectedImg: file });
                  }}
                />
                <figcaption class="figure-caption">{file}</figcaption>
              </figure>
            </div>
          ))}
        </div>

        <div
          class="modal fade modalVal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg ">
            <div class="modal-content " style={{ padding: 10 }}>
              <div class="col-lg-12 col-md-12 col-12">
                <figure class="figure">
                  <span>
                    <button type="button" class="btn btn-secondary btn-sm m-2">
                      Rename
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm m-2"
                      onClick={this.delete_file}
                    >
                      Delete
                    </button>
                  </span>
                  <img
                    className="img-fluid img-thumbnail"
                    src={`storage/${this.props.state.me}${this.state.curPath}/${this.state.selectedImg}`}
                    alt={"not available"}
                  />
                  <figcaption class="figure-caption">
                    {this.state.selectedImg}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallary;
