<template>
  <el-form  labelWidth="150px" size="small"  :model="formData" :rules="spInfoRule" ref="spInfo">
    <el-row :gutter="40">
      <el-col :span="12">
        <el-form-item label="企业全称" prop="spName">
          <el-input :disabled="preview==='preview'" v-model="formData.spName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="联系人姓名" prop="contactName">
          <el-input :disabled="preview==='preview'" v-model="formData.contactName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="企业类型" prop="spType">
          <el-radio-group :disabled="preview==='preview'" v-model="formData.spType">
            <el-radio v-for="item in spType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="联系人手机号" prop="contactPhone">
          <el-input :disabled="preview==='preview'" v-model="formData.contactPhone"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="管理员密码" prop="password">
          <el-input :disabled="preview==='preview'"  type="password" v-model="formData.password" style="width:30%"></el-input>
          <el-input :disabled="true" v-model="formData.password" style="width:30%;margin:0 10px;"></el-input>
          <el-button @click="handleMakeAdminPass">生成密码</el-button>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="行业分类" prop="industryTypeCopy">
          <el-input  v-model="formData.industryTypeCopy" style="display:none;"></el-input>
          <IndustryList :preview="preview==='preview'" :checkedList.sync="formData.industryType"/>
          <div class="m-t-10">
            <el-button><a href="https://baike.baidu.com/item/%E8%A1%8C%E4%B8%9A%E5%88%86%E7%B1%BB/2847868?fr=aladdin" target="_blank">百度搜索行业分类</a></el-button>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="帜讯销售姓名">
          <el-input :disabled="preview==='preview'" v-model="formData.customerManagerName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="帜讯销售手机号">
          <el-input :disabled="preview==='preview'" v-model="formData.customerManagerMdn"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <div class="title text">
          <span class="fr" style="cursor:pointer" @click="isOpen=!isOpen">{{isOpen?'收起':'展开'}}</span>
          <span class="line p-l-5">附加信息</span>
        </div>
      </el-col>
      <template v-if="isOpen">
        <el-col :span="12">
          <el-form-item label="所在地域">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电子邮箱">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="固定电话">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="移动电话">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="通信地址">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮编">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="经办人姓名">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="">
            <el-input style="visibility: hidden;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="经办人证件类型">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="经办人证件号码">
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="24">
        <div class="title">
          <span class="line p-l-5">资质信息</span>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item label="证件类型">
          <el-radio-group :disabled="preview==='preview'" v-model="cardChecked">
            <el-radio v-for="item in cardType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="40" v-show="cardChecked==='1'">
      <el-col :span="12">
        <el-form-item label="统一社会信用代码">
          <el-input :disabled="preview==='preview'" placeholder="18位数字或者大写英文字母"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="营业执照">
          <el-upload action="/" :auto-upload="false" :limit="1" :before-upload="handleBeforUpload" list-type="picture">
            <span style="margin-right:155px;">一张叫做营业执照的照片.JPG</span>
            <el-button :disabled="preview==='preview'" size="small" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="40" v-show="cardChecked==='2'">
      <el-col :span="12">
        <el-form-item label="税务登记号">
          <el-input :disabled="preview==='preview'" placeholder="15位数字或者大写英文字母"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="税务登记证">
          <el-upload action="/" :auto-upload="false" :limit="1">
            <el-button :disabled="preview==='preview'" size="small" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="营业执照注册号">
          <el-input :disabled="preview==='preview'" placeholder="15位数字或者大写英文字母"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="营业执照证">
          <el-upload action="/" :auto-upload="false" :limit="1">
            <span style="margin-right:155px;">一张叫做营业执照的照片.JPG</span>
            <el-button :disabled="preview==='preview'" size="small" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="组织机构代码">
          <el-input :disabled="preview==='preview'" placeholder="9位数字或者大写英文字母"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="组织机构代码证">
          <el-upload action="/" :auto-upload="false" :limit="1">
            <span style="margin-right:155px;">一张叫做营业执照的照片.JPG</span>
            <el-button :disabled="preview==='preview'" size="small" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="40">
      <el-col :span="24">
        <el-form-item label="其他证件">
          <el-upload action="/" :auto-upload="false" :limit="1">
            <el-button :disabled="preview==='preview'" size="small" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="备注">
          <el-input :disabled="preview==='preview'" type="textarea"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24" v-if="!preview">
        <el-form-item label=" ">
          <el-button type="primary" @click="next(2)">下一步</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  import IndustryList from '@/components/IndustryList/Industries.vue'
  import editMixin from '../../spManage/components/editMixin'

  const validateSpName=(rule,value,callback)=>{
    if(!value){
      return callback(new Error('请输入企业名称'));
    }
    callback();
  };
  const validateContactName=(rule,value,callback)=>{
    if(!value){
      return callback(new Error('请输入联系人姓名'));
    }
    callback();
  };
  const validateContactPhone=(rule,value,callback)=>{
    if(!value){
      return callback(new Error('请输入联系人手机号'));
    }
    if(!/^1[3|4|5|7|8]\d{9}$/.test(value)){
      return callback(new Error('手机号码格式错误'));
    }
    callback();
  };
  const validateAdminAccount=(rule,value,callback)=>{
    if(!value){
      return callback(new Error('请输入管理员手机号'));
    }
    callback();
  };

  export default {
    name: "spInfo",
    data(){
      return {
        spInfoRule:{
          spName:[{required:true,trigger:'blur',validator:validateSpName}],
          contactName:[{required:true,trigger:'blur',validator:validateContactName}],
          contactPhone:[{required:true,trigger:'blur',validator:validateContactPhone}],
          spType:[{required:true}],
          industryTypeCopy:[{required:true,message:'请选择行业信息'}],
          password:[{required:'trigger'}]
        },
        formData:{
          spName:'',
          contactName:'',
          contactPhone:'',
          spType:'1',
          industryTypeCopy:'',
          password:'',
          customerManagerName:'',
          customerManagerMdn:''
        },
        cardChecked: '1',
        spType: [{text: '正式', label: '1'}, {text: '体验', label: '2'}, {text: '测试', label: '3'}, {
          text: '联通',
          label: '4'
        }],
        cardType: [{text: '三证合一（一照一码）', label: '1'}, {text: '三证分离', label: '2'}],
        isOpen:false
      }
    },
    mixins:[editMixin],
    components:{
      IndustryList
    },
    watch:{
      'formData.industryType'(newVal){
        this.formData.industryTypeCopy=newVal.length>0 ?newVal.length:'';
      },
      syncPhone(newVal){
        if(newVal){
          this.formData.adminAccount=this.formData.contactPhone;
        }
      }
    },
    methods:{
      next(step){
//         this.$refs['spInfo'].validate((valid)=>{
//        });
        this.$emit('handleNext',step)
      },
      handleBeforUpload(file){
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是PNG、JPG格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleMakeAdminPass(){
        const chars = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";
        const charsLength = 8;

        let randomChars = "";
        for(let x=0; x<charsLength; x++) {
          const i = Math.floor(Math.random() * chars.length);
          randomChars += chars.charAt(i);
        }
        this.formData.password=randomChars;
      }
    }
  }
</script>
