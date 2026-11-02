# Agent Instructions & Project Guidelines

## 1. Skill-First Principle (Đọc Agent Skills trước khi làm)
- **Bắt buộc đọc Skill trước khi hành động**: Trước khi thực hiện bất kỳ yêu cầu nào của người dùng (tạo tính năng, sửa lỗi, chỉnh sửa giao diện, kiểm tra bảo mật, tái cấu trúc mã nguồn), Agent **PHẢI** đọc và đối chiếu file `SKILL.md` của các Agent Skills tương ứng trong `.agents/skills/`.
- **Thông báo kỹ năng sử dụng**: Luôn nêu rõ kỹ năng đang được kích hoạt để thực hiện công việc (ví dụ: *"Sử dụng skill [tên-skill] để..."*).
- **Phân loại kỹ năng ưu tiên**:
  - **Khởi tạo & Lập kế hoạch**: `using-superpowers`, `brainstorming`, `writing-plans`, `plan-first`.
  - **Thiết kế UI/UX & Giao diện**: `ui-ux-pro-max`, `ui-styling`, `terminal-dark`, `banner-design`.
  - **Sửa lỗi & Debug**: `systematic-debugging` (tìm nguyên nhân gốc rễ trước khi sửa).
  - **Kiểm thử & Đảm bảo chất lượng**: `test-driven-development`, `verification-before-completion`.
  - **Bảo mật & Rà soát lỗ hổng**: `security-audit` (xác thực, client-side, API, cloud/deploy).
  - **Subagents & Code Review**: `subagent-driven-development`, `dispatching-parallel-agents`, `requesting-code-review`, `receiving-code-review`.

## 2. Antigravity Platform Adaptation
- Khi thực hiện kế hoạch nhiều bước: Thiết lập checklist rõ ràng và kiểm tra từng bước trước khi hoàn tất.
- Subagents: Khi cần phân chia công việc độc lập, sử dụng `invoke_subagent`.
- Xác minh trước khi báo cáo hoàn thành: Luôn kiểm tra build (`npm run build`), kiểm tra log server và đối chiếu yêu cầu của người dùng.

