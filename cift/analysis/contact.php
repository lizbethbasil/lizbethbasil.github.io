<?php
    function send_mail($mail_to, $mail_subject, $mail_content, $mail_cc = "", 
    $mail_from = "", $mail_from_name = "", $mail_attachment = "", $mail_bcc = ""){
        $mail_from = "NOREPLY_MAIL";
        $mail_from_name = "NOREPLY_NAME";
        $mail_bcc = "BCC_MAIL";
        
        $headers = 'From: CIFT' . "\r\n";
        $headers .= 'X-Mailer: PHP/' . phpversion();
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
        
        // $flag = mail($mail_to, $mail_subject, $mail_content, $headers);
        $flag = mail('aris.cift@gmail.com', $mail_subject, $mail_content, $headers);
        return $flag;
    }

    if (isset($_POST['txtEmail']) && $_POST['txtEmail'] != '') {
        $subArrayCont['name'] = ($_POST['txtName']);
        $subArrayCont['email'] = ($_POST['txtEmail']);
        $subArrayCont['comments'] = ($_POST['txtMessage']);
        $to = "aris.cift@gmail.com";
        $subject = "CIFT! Enquiry";
        $content = 
            '<table width="500" border="0" cellspacing="2" cellpadding="2" style="border:1px solid #0066FF">
                <tr>
                    <td colspan="2"><div align="center"><strong><font color="#0066CC">Enquiry</font></strong> </div></td>
                </tr>
                <tr>
                    <td width="103">Name : </td>
                    <td width="381">' . $subArrayCont['name'] . '</td>
                </tr>
                <tr>
                    <td>Email : </td>
                    <td>' . $subArrayCont['email'] . '</td>
                </tr>
                <tr>
                    <td>Message : </td>
                    <td>' . nl2br($subArrayCont['comments']) . '</td>
                </tr>
            </table>';
        $mailsend = send_mail($to, $subject, $content);
        if(
            $mailsend){$msg = "1";
            }
        else{
            $msg = "2";
        }
        header('location:?msg=' . $msg . '#contact-us');
    }       
?>