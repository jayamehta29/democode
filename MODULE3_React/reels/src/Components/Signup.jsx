import React, { useContext, useState } from "react";
import { firebaseDB, firebaseStorage } from "../config/firebase";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Input from '@material-ui/core/Input';

// import { makeStyles } from '@material-ui/core/styles';

import {
  TextField,
  Grid,
  Button,
  Paper,
  Card,
  CardContent,
  CardActions,
  Container,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [message, setMessage] = useState("");
  const { signUp } = useContext(AuthContext);

  const handleFileSubmit = (event) => {
    let fileObject = event.target.files[0];
    
    setProfileImage(fileObject);
  };

  const handleSignUp = async () => {
    try {
      let response = await signUp(email, password);
      let uid = response.user.uid;
      //   you are signed up
      const uploadPhotoObject = firebaseStorage
        .ref(`/profilePhotos/${uid}/image.jpg`)
        .put(profileImage);
      //   console.log(uploadPhotoObject);
      uploadPhotoObject.on("state_changed", fun1, fun2, fun3);
      // to track the progress of the upload
      function fun1(snapshot) {
        // bytes transferred
        // totoal bytes
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      }
      // if indicates a error !!
      function fun2(error) {
        console.log(error);
      }
      // it indicates success of the upload !!
      async function fun3() {
        let profileImageUrl =
          await uploadPhotoObject.snapshot.ref.getDownloadURL();
        // db me collection => document => {username , email , profileImageUrl};
        firebaseDB.collection("users").doc(uid).set({
          email: email,
          userId: uid,
          username: username,
          profileImageUrl: profileImageUrl,
          postsCreated:[]
        });
        props.history.push("/");
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  let useStyles = makeStyles({
    centerDivs: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      width: "100vw",
    },
    carousal: { height: "10rem", backgroundColor: "lightgray" },
    fullWidth: {
      width: "100%",
    },
    centerElements: {
      display: "flex",
      flexDirection: "column",
    },
    mb: {
      marginBottom: "1rem",
    },
    padding: {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
    alignCenter: {
      justifyContent: "center",
    },
  });
  let classes = useStyles();

  function uplaod(){
    
  }

  return (
    
    <div>
      <Container>
        <Grid container spacing={3} style={{ display:'flex', justifyContent:'center' }}>
          <Grid item l={3}>
          <Card variant="outlined" className={classes.mb}>
            <CardMedia
              image={logo}
              style={{ height: "5rem", backgroundSize: "contain" }}
            ></CardMedia> 
            <Typography style={{ textAlign: "center" }}>
                Signup to see videos and photos from your friends
            </Typography>

            <CardContent className={classes.centerElements}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  size="small"
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField>

                <TextField
                  label="Username"
                  type="username"
                  variant="outlined"
                  value={username}
                  size="small"
                  onChange={(e) => setUsername(e.target.value)}
                ></TextField>

              </CardContent>
              <label htmlFor="icon-button-file">
                <Button
                  startIcon={<CloudUploadIcon />}
                  variant="outlined"
                  component="label"
                  color="secondary"
                  className={classes.fullWidth}
                  // onClick={uplaod}
                >
                  <Input type="file"
                    accept="image/*"
                    style={{ display:'none'}}
                    onChange={(e) => {
                      handleFileSubmit(e);
                  }}></Input>
                    UPLOAD PROFILE IMAGE
                  </Button>
              </label>
              

              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSignUp}
                  className={classes.fullWidth}
                >
                  <Link  to="/Feeds"></Link>
                  SIGN UP
                </Button>
              </CardActions>

              <Typography style={{ textAlign: "center" }}>
                By signing up, you agree to our terms, Data Policy and Cookies Policy 
            </Typography>

          </Card>

            
          </Grid>
        </Grid>
      </Container>
      {/* <h1>Signup Page</h1>
      <div>
        <div>
          Profile Image
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              handleFileSubmit(e);
            }}
          ></input>
        </div>
      </div>
      <button onClick={handleSignUp}>SignUp</button>*/}
      </div>
  );
};

export default Signup;
