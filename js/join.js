    //입력 상자포커스 했을때 뒤에 알림 문구표시하기

    $('#name2').focus(function(){
        $(this).after('<strong> 필수입력 항목입니다.</strong>')
    }).blur(function(){
        $(this).next().remove()
    })

    $('#id_lbl').focus(function(){
        $(this).after('<strong>띄어쓰기 없이 영문,숫자를 혼합하여 4~12글자를 사용할 수 있습니다(특수문자 제외).</strong>')
    }).blur(function(){
        $(this).next().remove()
    })

    $('#password1').focus(function(){
        $(this).after('<strong>안전한 사용을 위해 영문,숫자,특수문자 조합 6~15자를 사용해 해주세요.</strong>')
    }).blur(function(){
        $(this).next().remove()
    })

    $('#password2').focus(function(){
        $(this).after('<strong>비밀번호를 재입력해주세요.</strong>')
    }).blur(function(){
        $(this).next().remove()
    })

    //이메일 도메인 선택을 변경(change)했을때 변경한 내용으로 채우기
    $('#email_choice').on('change',function(){
        $('#email_choice option:selected').each(function(){
            if($(this).val() === 'nochoice'){
                $('#domain').val('')
                $('#domain').attr('disabled',true)
            } else if ($(this).val === 'self' ){
                $('#domain').val('')
                $('#domain').attr('disabled',false)
            } else {
                $('#domain').val($(this).val())
                $('#domain').attr('disabled',true)
            }
        })
    })

    //생년 월일에 datepicker 연결하기
        $('#birthday').datepicker({
        dateFormat : 'yy-mm-dd', //날짜형식
        changeMonth:'true',      //월선택 창이 생김
        changeYear:'true',       //연도 선택 창이 생김
        yearRange: '1900:2020'   //연도 범위
    })

    //textarea 박스에 키보드 이벤트(keydown,keyup,keypress)입력된 글자수를 카운트해서 남은 글자수 표시하기
        $('textarea').on('keyup', function(){
        var maxlen = 10
        var count = $(this).val().length
        var remain = maxlen - count
        $(this).next().text(remain)
    })

    /**************** 정규 표현식으로 아이디및 비밀번호 유효성 체크***************/
    /**************<submit 이벤트는 폼에서 submit button에서 발생함>**************/
   
    $('.join_form').on('submit',function(){
        
    //이름은 할글만
    var name = $('#name2').val();
    var nameCh = /^[가-힣]+$/;
    //정규 표현식 .test(입력내용): 정규표현식에 맞는지 내용을 검사 
    if (!nameCh.test(name)){
        alert('한글이 아닙니다.');
        $('#name2').focus();
        $('#name2').select();
        return false
    }

    //아이디 유효성 체크 : 영문,숫자를 혼합하여 4~12글자,특수문자 제외
    var idtxt =$('#id_lbl').val();
    if (idtxt.length >=4 && idtxt.length <=12 ){
        for (var i= 1; i < idtxt.length ; i++){
            var ch = idtxt.charAt(i);
            if(!(ch >='0' && ch <=9) && !( ch >= 'a' && ch <= 'z') && !( ch >= 'A' && ch <= 'Z')){
                alert('아이디는 대소문자,숫자만 입력 가능합니다.');
                $('#id_lbl').css({
                    border : '1px solid #f00'
                })
                $('#id_lbl').focus();
                $('#id_lbl').select();
                return false
            }
        }
    } else {
        alert('아이디는 4~12글자 범위로 입력해주세요.')
        $('#id_lbl').css({
            border : '1px solid #f00'
        })
        $('#id_lbl').focus();
        $('#id_lbl').select();
        return false
    }
    //비밀번호 유효성 체크 : 반드시 영문,숫자,특수문자를 1개 이상 조합해서 6~15글자 범위
    var pass1 = $('#password1').val();
    var pass2 = $('#password2').val();
    var check1 = /^(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    // ?= 처음부터 다시 조사해라
    //. : 임의의 모든 문자( 숫자, 특수문자, 대소문자)
    // * : 0번 이상 나올수 있음( 나올수도 있고 안나올수도 있음)
    //[](대괄호)안에 ^(꺽쇠는) 부정(not)을 의미함
    if (pass1.length >= 6 && pass1.length <= 12){
        if( !(check1.test(pass1))){
            alert('비밀번호는 반드시 영문,숫자,특수문자를 1개 이상 조합해서 6~15글자 사이로 입력해주세요.');
            $('#password1').css({
                border :'1px solid #f00'
            })
            $('#password1').focus();
            $('#password1').select();
            return false; 
        }
    } else {
        alert('비밀번호 글자수는 6~15글자 사이로 입력해주세요. ');
        $('#password1').css({
            border :'1px solid #f00'
        })
        $('#password1').focus();
        $('#password1').select();
        return false; 
    }
    //비밀번호와 비밀번호확인의 일치 여부 점검
    if(pass2.length === 0){
        alert('비밀번호 확인을 입력하지 않았습니다.');
        $('#password2').css({
            border :'1px solid #f00'
        })
        $('#password2').focus();
        $('#password2').select();
        return false;
    } else if (pass1 !== pass2){
        alert('비밀번호가 일치하지 않습니다. 정확히 입력해주세요.');
        $('#password2').css({
            border :'1px solid #f00'
        })
        $('#password2').focus();
        $('#password2').select();
        return false;

    }
    //휴대폰 번호 두번째칸은 3~4자리, 두번째 칸은 3~4자리
    var tel1 = $('.tel1').val();
    var tel2 = $('.tel2').val();
    if (!/^\d{3,4})$/.test(tel1)){
        alert('전화번호 형식이 맞지 않습니다.');
        $('.tel2').focus();
        $('.tel2').select();
        return false;
    } else if (!/^\{3,4}$/.test(tel2)){
        alert('전화번호 형식이 맞지 않습니다.');
        $('.tel2').focus();
        $('.tel2').select();
        return false;
    }
    //이메일 유효성 체크
    var email = $('#email').val();
    var emailCh = /^[a-zA-Z0-9]+$/ ;
    if (!(emailCh.test(email))){
        alert('이메일 형식이 틀립니다.');
        $('#email').focus();
        $('#email').select();
        return false;
    }
    //도메인 유효성 체크
    var domain = $('#domain').val();
    var domainCh = /^[a-zA-Z0-9]+[\.][a-z]$/
    if ( domain.length === 0){
    alert('도메인을 선택해주세요.');
    $('#email_choice').focus();
    return false;
    } else if( !domainCh.test(domain)){
            alert('도메인 형식에 맞지 않습니다.');
            $('#email_choice').focus();
            return false
        }
    // 성별 체크 확인 유무
    var gender =$('input[name="gender"]:checked').length;
    if(gender ===0 ){
        $('.gender').text('성별을 서택해주세요.').css({
            color : '#f00'
        })
        return false;
    } else { 
        $('.gender').text('성별').css({ color : '#000'})
    }
        return false // 유효성 체크 후 제거할것.
    })

