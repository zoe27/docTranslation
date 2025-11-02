// 🧩 防止重复加载脚本（Next.js 热更新或多次渲染时不会报错）
if (window.__PDF_EXPERIENCE_JS_LOADED__) {
    console.log("⚙️ pdf-experience.js 已加载过，跳过重复执行");
  } else {
    window.__PDF_EXPERIENCE_JS_LOADED__ = true;
  
    // ⚙️ 后端接口地址（按你自己的后端服务改）
    const API_BASE = 'http://106.53.66.116/api'; // ✅ 确保没有多余斜杠
  
    // ✅ DOM 元素获取函数
    const fileInput = () => document.getElementById('file-input');
    const uploadBtn = () => document.getElementById('upload-btn');
    const progressEl = () => document.getElementById('progress');
    const resultEl = () => document.getElementById('result');
    const editDialog = () => document.getElementById('edit-dialog');
    const editText = () => document.getElementById('edit-text');
    const saveBtn = () => document.getElementById('save-btn');
  
    console.log('✅ pdf-experience.js loaded');
  
    // 🧠 等待上传按钮加载后再绑定事件（适配 Next.js 延迟渲染）
    function waitForUploadButton() {
      console.log('🔍 Checking for upload button...');
      const btn = uploadBtn();
      if (btn) {
        console.log('✅ Found upload button, binding click event');
        btn.addEventListener('click', uploadAndTranslate, { once: true });
      } else {
        console.warn('⏳ Waiting for upload button...');
        setTimeout(waitForUploadButton, 1000);
      }
    }
  
    // ⏫ 上传并触发翻译流程
    async function uploadAndTranslate() {
      console.log('📤 Upload button clicked');
  
      const file = fileInput()?.files?.[0];
      if (!file) {
        alert('请选择一个 PDF 文件');
        return;
      }
  
      progressEl().classList.remove('hidden');
      progressEl().textContent = '正在上传文件……';
      resultEl().innerHTML = '';
  
      try {
        // Step 1️⃣ 上传文件
        const formData = new FormData();
        formData.append('file', file);
  
        console.log('🚀 Uploading to:', `${API_BASE}/upload`);
        const uploadResp = await fetch(`${API_BASE}/upload`, {
          method: 'POST',
          body: formData,
        });
  
        if (!uploadResp.ok) throw new Error(`上传失败 (${uploadResp.status})`);
  
        const data = await uploadResp.json();
        if (data.error) throw new Error(data.error);
        if (!data.doc_id) throw new Error('后端未返回文档 ID');
  
        const doc_id = data.doc_id;
        console.log('📄 文件上传成功, doc_id =', doc_id);
        progressEl().textContent = '文件上传成功，开始翻译...';
  
        // Step 2️⃣ 轮询翻译进度
        let percent = 0;
        while (percent < 100) {
          const progResp = await fetch(`${API_BASE}/progress/${doc_id}`);
          const prog = await progResp.json();
          percent = prog.percent || 0;
          const msg = prog.message || '';
          progressEl().textContent = `翻译进度：${percent}% - ${msg}`;
          console.log('🔄 Progress:', percent, msg);
          if (percent >= 100) break;
          await new Promise(r => setTimeout(r, 2000));
        }
  
        // Step 3️⃣ 显示结果下载链接
        progressEl().textContent = '翻译完成 ✅';
        const exportUrl = `${API_BASE}/export/${doc_id}`;
        resultEl().innerHTML = `
          <div class="text-center">
            <p class="text-green-700 font-semibold mb-2">✅ 翻译完成！</p>
            <a href="${exportUrl}" target="_blank"
               class="text-blue-600 underline hover:text-blue-800">
               点击这里下载译文 PDF
            </a>
          </div>
        `;
  
        progressEl().classList.add('hidden');
      } catch (err) {
        console.error('❌ 翻译流程出错:', err);
        alert('翻译失败：' + err.message);
        progressEl().classList.add('hidden');
      }
    }
  
    // 🪄 页面加载后启动绑定逻辑
    document.addEventListener('DOMContentLoaded', () => {
      console.log('🚀 DOM loaded, initializing PDF experience...');
      waitForUploadButton();
    });
  }

  // 🪄 页面加载后启动绑定逻辑（兼容 Next.js）
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('🚀 DOM loaded, initializing PDF experience...');
      waitForUploadButton();
    });
  } else {
    console.log('🚀 DOM already loaded, initializing immediately...');
    waitForUploadButton();
  }
  
  