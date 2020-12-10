let path = require("path")

module.exports = {
    checkFileType: function (filename) {
        let basename = path.extname(filename).toLowerCase().slice(1, filename.length);
        switch (basename) {
            case "png":
            case "bmp":
            case "gif":
            case "jpg":
            case "jpeg":
            case "pad":
            case "swf":
            case "svg":
                return "picture"
                break;
            case "avi":
            case "mp4":
            case "mov":
            case "wmv":
            case "asf":
            case "3gp":
            case "rmvb":
            case "rm":
            case "flv":
                return "video"
                break;
            case "doc":
            case "html":
            case "rar":
            case "zip":
            case "txt":
            case "xlsx":
                return "document"
                break;
            default:
                return "other"
        }
    }
}