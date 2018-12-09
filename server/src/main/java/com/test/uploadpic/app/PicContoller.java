package com.test.uploadpic.app;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
class PicContoller {
    private static String UPLOADED_FOLDER = "D://User profile//Documents//GitHub//UploadPictureLocal-angular-spring//picture//";

    @GetMapping
    public String Hello() {
        return "<h1>Hello</h1>";
    }

    @PostMapping("/upload")
    public String UploadPic(@RequestParam("pic") MultipartFile file) {

        try {

            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);

            return "You successfully uploaded '" + file.getOriginalFilename() + "'";

        } catch (IOException e) {
            e.printStackTrace();
            return "fail";
        }

    }

}