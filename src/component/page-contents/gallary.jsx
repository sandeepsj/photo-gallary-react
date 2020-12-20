import React, { Component } from "react";
import axios from "axios";
import folderIcon from "../../assets/images/folderIcon.jpg";
//import folderIcon from "../../images/assets/folderIcon";
axios.defaults.withCredentials = true;

class Gallary extends Component {
  state = {
    images: [],
    folders: [],
    curPath: "",
    selectedImg: undefined,
  };
  Refs = {
    newName: React.createRef(),
  };
  rename = (newName) => {
    console.log(newName);
    axios
      .post("/rename", {
        path: `storage/${this.props.state.me}${this.state.curPath}`,
        oldName: this.state.selectedImg,
        newName: newName,
      })
      .then((res) => {
        console.log(res, "Renamed Successfuly");
        this.getImages();
      })
      .catch((err) => console.log(err, "Failed to rename"));
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
  fileSelector = undefined;
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

  handleUpload = (file) => {
    this.readImage(file, (img, imgName) => {
      axios
        .post("/uploadImage", {
          image: img,
          fname: imgName.split(".")[0],
          dir: this.state.curPath,
        })
        .then((res) => {
          this.getImages();
          console.log("File Uploaded Successfully");
        });
    });
    // axios
    //   .post("/uploadImage", { data: file, fileName: file.name })
    //   .then((res) => {
    //     this.getImages();
    //     console.log("File Uploaded Successfully");
    //   });
  };

  readImage = (file, callBack) => {
    // Check if the file is an image.
    if (file.type && file.type.indexOf("image") === -1) {
      alert("File is not an image.", file.type, file);
      return;
    }
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        callBack(reader.result, file.name);
      },
      false
    );
    reader.readAsDataURL(file);
  };

  render() {
    this.fileSelector = document.createElement("input");
    this.fileSelector.type = "file";
    this.fileSelector.onchange = (event) =>
      this.handleUpload(event.target.files[0]);
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
            onClick={() => {
              this.fileSelector.click();
            }}
          >
            Upload here
          </button>
          <button
            type="button"
            class="btn btn-info"
            style={{ float: "right", marginRight: 10 }}
            onClick={() => {
              this.fileSelector.click();
            }}
          >
            Create New Folder
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
          class="modal face renameModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg ">
            <div class="modal-content " style={{ padding: 10 }}>
              <form class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter new name"
                    required
                    autoFocus
                    ref={this.Refs.newName}
                  />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    data-toggle="modal"
                    data-target=".renameModal"
                    onClick={() => this.rename(this.Refs.newName.current.value)}
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          class="modal fade modalVal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
          style={{ marginTop: 80 }}
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content " style={{ padding: 10 }}>
              <div class="col-lg-12 col-md-12 col-12">
                <figure class="figure">
                  <span>
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm m-2"
                      data-toggle="modal"
                      data-target=".renameModal"
                    >
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
