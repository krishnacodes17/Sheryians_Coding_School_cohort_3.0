## FTP  (file transfer protocol)

- FTP is a standard network protocol used for the transfer of computer files between a client and server on a computer network. It is built on a client-server model architecture and uses separate control and data connections between the client and the server.

# multer
- Multer is a node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

-## multer provides two types of storage:
- DiskStorage: This storage engine gives you full control on storing files to disk. its work for local storage

- MemoryStorage: This storage engine stores the files in memory as `Buffer` objects. It is meant for short-term storage of files, and is not recommended for large files or production use. its work for cloud storage


```  const multer = require("multer")


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(error,destination)
    },


    filename:(req,file,cb)=>{
        cb(error,filename)
    }
})

```